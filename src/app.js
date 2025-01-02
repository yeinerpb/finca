import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(errorHandler);
export default app;
