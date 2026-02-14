import express from "express";
import logger from "./o11y/logger.mjs";

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});

app.get('/health', (req, res) => {
  logger.info('Health check called');
  res.status(200).json({ status: 'Ok' });
});