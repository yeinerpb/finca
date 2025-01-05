import app from "./app.js";
import dotenv from "dotenv";
import { syncDatabase } from "./database/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

syncDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
