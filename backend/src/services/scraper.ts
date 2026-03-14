import axios from 'axios';

export interface ScrapedNews {
  id: string;
  title: string;
  link: string;
  date: string;
  source: 'Lex.uz' | 'Soliq.uz';
  type: string;
  number: string;
}

export class ScraperService {

  // ===== LEX.UZ — Official REST API =====
  static async scrapeLexUz(keyword: string = ''): Promise<ScrapedNews[]> {
    try {
      console.log('🔍 Fetching from Lex.uz API...');

      const body = {
        lang: 2,           // O'zbek (lotin)
        page_size: 15,
        page_number: 1,
        search_type: 1,
        text: keyword      // bo'sh bo'lsa — oxirgi hujjatlar
      };

      const { data } = await axios.post('https://lex.uz/api/search', body, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36',
          'Referer': 'https://lex.uz'
        }
      });

      if (data.code !== 1 || !data.data?.items) {
        console.warn('⚠️ Lex.uz returned unexpected response:', data.code);
        return [];
      }

      const news: ScrapedNews[] = data.data.items.map((item: any) => ({
        id: String(item.lact_id),
        title: item.title,
        link: `https://lex.uz/uz/docs/${item.lact_id}`,
        date: item.acceptance_date,
        source: 'Lex.uz' as const,
        type: item.display_name_form || '',
        number: item.lact_number || ''
      }));

      console.log(`✅ Fetched ${news.length} items from Lex.uz`);
      return news;
    } catch (error: any) {
      console.error('❌ Error fetching Lex.uz:', error.message);
      return [];
    }
  }

  // ===== SOLIQ.UZ — gov.uz portal scraping =====
  static async scrapeSoliqUz(): Promise<ScrapedNews[]> {
    try {
      console.log('🔍 Fetching from Soliq.uz (gov.uz)...');

      // gov.uz has a JSON API for news
      const { data } = await axios.get('https://soliq.uz/api/v1/news?lang=uz&limit=10&page=1', {
        headers: {
          'Accept': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
        },
        timeout: 10000
      });

      // Try to parse response
      if (data?.results) {
        const news: ScrapedNews[] = data.results.map((item: any) => ({
          id: String(item.id || Math.random()),
          title: item.title || item.name || '',
          link: `https://soliq.uz/uz/press-services/news/${item.id}`,
          date: item.published_at || item.date || '',
          source: 'Soliq.uz' as const,
          type: 'Soliq Xabarlari',
          number: ''
        }));
        console.log(`✅ Fetched ${news.length} items from Soliq.uz`);
        return news;
      }

      return [];
    } catch (error: any) {
      console.error('❌ Error fetching Soliq.uz:', error.message);
      return [];
    }
  }

  // ===== Tax-related filter for Lex.uz =====
  static async fetchTaxLaws(): Promise<ScrapedNews[]> {
    const keywords = ['soliq', 'QQS', 'YaJT', 'bojxona', 'byudjet'];
    const allResults: ScrapedNews[] = [];

    for (const kw of keywords) {
      const results = await this.scrapeLexUz(kw);
      allResults.push(...results);
    }

    // Deduplicate by id
    const unique = Array.from(new Map(allResults.map(n => [n.id, n])).values());
    return unique.slice(0, 20);
  }
}
