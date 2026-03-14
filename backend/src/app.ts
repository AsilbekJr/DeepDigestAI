import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import newsRouter from './routes/news.js';
import aiRouter from './routes/ai.js';

dotenv.config();

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/news', newsRouter);
app.use('/api/ai', aiRouter);

// Health check
app.get('/', (req, res) => {
  res.json({
    message: '🚀 EchoTax AI API',
    version: '1.0.0',
    status: 'online',
    endpoints: {
      news: '/api/news',
      newsTax: '/api/news/tax',
      newsSearch: '/api/news/search?q=soliq',
      aiAnalyze: 'POST /api/ai/analyze',
      aiChat: 'POST /api/ai/chat',
      aiLatest: '/api/ai/analyze-latest'
    }
  });
});

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

export default app;
