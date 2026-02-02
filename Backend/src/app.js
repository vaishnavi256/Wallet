import express from "express";
import dataRoutes from "./routes/data.routes.js";
import cors from "cors"

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", 
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/", dataRoutes);

export default app;
