import express from "express";
import morgan from "morgan";
import cors from "cors";
import TestRoutes from "./routes/test-routes";

const app = express();
app.use(express.json());

app.use(morgan("dev"));
app.use(cors());
app.use(TestRoutes);

export default app;
