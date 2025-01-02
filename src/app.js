import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1/users", userRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(errorHandler);
export default app;
