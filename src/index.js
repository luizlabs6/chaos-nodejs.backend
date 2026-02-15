import express from "express";
import cors from "cors";
import corsOptions from "./config/cors.js";
import router from "./routes/routes.js";

const app = express();

// Express middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use("/v1", router);

export default app;
