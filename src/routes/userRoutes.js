import express from "express";
import { validateUser } from "../middlewares/validateUser.js";
import { protect } from "../middlewares/authMiddleware.js";
import { authorize } from "../middlewares/authorize.js";
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

router.use(protect);

// User routes
router.get(
  "/me",
  authorize(["user", "admin"]),
  (req, res, next) => {
    req.params.id = req.user.id;
    next();
  },
  getUserById
);

router.put(
  "/me",
  authorize(["user", "admin"]),
  (req, res, next) => {
    req.params.id = req.user.id;
    next();
  },
  updateUser
);

router.delete(
  "/me",
  authorize(["user", "admin"]),
  (req, res, next) => {
    req.params.id = req.user.id;
    next();
  },
  deleteUser
);

//Admin routes
router.get("/", authorize(["admin"]), getUsers);
router.get("/:id", authorize(["admin"]), getUserById);
router.put("/:id", authorize(["admin"]), updateUser);
router.delete("/:id", authorize(["admin"]), deleteUser);

export default router;
