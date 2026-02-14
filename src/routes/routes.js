import { Router } from 'express';
import logger from '../o11y/logger.js';

const router = Router();

router.get('/health', (req, res) => {
  logger.info('Health');
  res.status(200).json({ status: 'Ok' });
});

export default router;
