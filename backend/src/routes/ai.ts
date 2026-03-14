import { Router } from 'express';
import { GeminiService } from '../services/gemini.js';
import { ScraperService } from '../services/scraper.js';

const router = Router();

// POST /api/ai/analyze — qonunni tahlil qilish
router.post('/analyze', async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title) {
      return res.status(400).json({ success: false, error: 'title majburiy' });
    }

    const analysis = await GeminiService.analyzeLaw(title, content);
    return res.json({ success: true, data: analysis });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Tahlil qilishda xato' });
  }
});

// POST /api/ai/chat — savol-javob
router.post('/chat', async (req, res) => {
  try {
    const { question } = req.body;
    if (!question) {
      return res.status(400).json({ success: false, error: 'question majburiy' });
    }

    const answer = await GeminiService.chatAnswer(question);
    return res.json({ success: true, question, answer });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Chat xizmati ishlamayapti' });
  }
});

// GET /api/ai/analyze-latest — Oxirgi qonunlarni avtomatik tahlil qilish
router.get('/analyze-latest', async (req, res) => {
  try {
    const news = await ScraperService.scrapeLexUz();
    const top3 = news.slice(0, 3);

    const analyzed = await Promise.all(
      top3.map(async (item) => ({
        ...item,
        analysis: await GeminiService.analyzeLaw(item.title)
      }))
    );

    return res.json({ success: true, count: analyzed.length, data: analyzed });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Tahlil xatosi' });
  }
});

export default router;
