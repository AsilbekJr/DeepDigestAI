import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export interface AnalysisResult {
  summary: string;
  impact: string;
  urgency: 'critical' | 'high' | 'medium' | 'low';
  affectedBusinessTypes: string[];
  actionRequired: string;
  deadline?: string;
  keywords: string[];
}

export class GeminiService {

  static async analyzeLaw(title: string, content: string = ''): Promise<AnalysisResult> {
    try {
      if (!process.env.GEMINI_API_KEY) {
        return this.getMockAnalysis(title);
      }

      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const prompt = `
Siz O'zbekiston soliq qonunchiligi bo'yicha professional maslahatchiсiz.

Quyidagi qonun hujjatini tahlil qiling va JSON format javobing:
Sarlavha: "${title}"
Mazmun: "${content || 'Mazmun mavjud emas'}"

Quyidagi JSON formatda javob bering (boshqa matn bo'lmasin):
{
  "summary": "Qonunning qisqacha mazmuni (o'zbek tilida, 2-3 jumla)",
  "impact": "Bu qonun biznes va buxgalterlarga qanday ta'sir qiladi (o'zbek tilida)",
  "urgency": "critical | high | medium | low",
  "affectedBusinessTypes": ["MChJ", "YaTT", "AJ", "Barcha"],
  "actionRequired": "Buxgalter nima qilishi kerak (o'zbek tilida)",
  "deadline": "Amal qilish muddati yoki null",
  "keywords": ["soliq", "QQS", "daromad"]
}

urgency darajasi:
- critical: 3 kun ichida amal qilish kerak
- high: 30 kun ichida
- medium: 90 kun ichida  
- low: faqat ma'lumot uchun
`;

      const result = await model.generateContent(prompt);
      const text = result.response.text();

      // Extract JSON from response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        return this.getMockAnalysis(title);
      }

      const parsed = JSON.parse(jsonMatch[0]);
      return parsed as AnalysisResult;

    } catch (error: any) {
      console.error('❌ Gemini error:', error.message);
      return this.getMockAnalysis(title);
    }
  }

  static async chatAnswer(question: string, context: string = ''): Promise<string> {
    try {
      if (!process.env.GEMINI_API_KEY) {
        return "⚠️ Gemini API key sozlanmagan. .env faylga GEMINI_API_KEY qo'shing.";
      }

      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      const prompt = `
Siz EchoTax AI — O'zbekiston soliq maslahatchiсiz.
Foydalanuvchi savoli: "${question}"

${context ? `Qo'shimcha kontekst: ${context}` : ''}

Qoidalar:
1. Faqat O'zbekiston soliq qonunchiligi haqida gapiring
2. O'zbek tilida javob bering
3. Aniq va qisqa bo'ling
4. Kerak bo'lsa, Lex.uz yoki Soliq.uz ga yo'llang
5. Rasmiy manbalardan (Lex.uz, Soliq.uz) ma'lumot bering
`;

      const result = await model.generateContent(prompt);
      return result.response.text();

    } catch (error: any) {
      console.error('❌ Gemini chat error:', error.message);
      return "Hozirda xizmat mavjud emas. Keyinroq urinib ko'ring.";
    }
  }

  // Fallback when no API key
  private static getMockAnalysis(title: string): AnalysisResult {
    const isTax = /soliq|tax|QQS|daromad|bojxona|byudjet/i.test(title);
    return {
      summary: `"${title.substring(0, 80)}..." qonunining qisqacha tahlili (AI tahlili uchun GEMINI_API_KEY kerak).`,
      impact: 'Bu hujjat korxonalar faoliyatiga ta\'sir qilishi mumkin.',
      urgency: isTax ? 'high' : 'low',
      affectedBusinessTypes: ['MChJ', 'YaTT', 'AJ'],
      actionRequired: 'Hujjatni Lex.uz da ko\'rib chiqing va buxgalteringiz bilan maslahatlashing.',
      deadline: undefined,
      keywords: ['qonun', 'o\'zgartirish']
    };
  }
}
