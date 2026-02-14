import app from "./index.js";
import logger from "./o11y/logger.js";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
