import express from "express";
import { validateUser } from "../middlewares/validateUser.js";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createUser,
  loginUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

//public routes
router.post("/", validateUser, createUser);
router.post("/login", loginUser);

//private routes
router.use(protect);
router.get("/", getUsers);
router.get("/:id", getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
