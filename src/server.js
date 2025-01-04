import app from "./app.js";
import dotenv from "dotenv";
import db from "./database/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT} - listening`);
    });
  })
  .catch((err) => {
    console.error("Unable to sync the database:", err);
  });
