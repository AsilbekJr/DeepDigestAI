import { Router } from 'express';
import { ScraperService } from '../services/scraper.js';

const router = Router();

// GET /api/news — latest laws from Lex.uz
router.get('/', async (req, res) => {
  try {
    const news = await ScraperService.scrapeLexUz();
    res.json({ success: true, count: news.length, data: news });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch news' });
  }
});

// GET /api/news/tax — tax-specific laws
router.get('/tax', async (req, res) => {
  try {
    const news = await ScraperService.fetchTaxLaws();
    res.json({ success: true, count: news.length, data: news });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch tax laws' });
  }
});

// GET /api/news/soliq — Soliq.uz news
router.get('/soliq', async (req, res) => {
  try {
    const news = await ScraperService.scrapeSoliqUz();
    res.json({ success: true, count: news.length, data: news });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch Soliq news' });
  }
});

// GET /api/news/search?q=soliq — search Lex.uz
router.get('/search', async (req, res) => {
  try {
    const keyword = (req.query.q as string) || '';
    const news = await ScraperService.scrapeLexUz(keyword);
    res.json({ success: true, count: news.length, keyword, data: news });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Search failed' });
  }
});

export default router;
