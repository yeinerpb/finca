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
} from "../controllers/userController";

const router = express.Router();

//public routes
router.post("/users", validateUser, createUser);
router.post("/login", loginUser);

//private routes
router.use(protect);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
