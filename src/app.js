import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
