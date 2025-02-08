import express from "express";
import dotenv from "dotenv";
import router from "./routes/router";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/example", router);

// Error Handling Middleware
app.use(errorHandler);

export default app;
