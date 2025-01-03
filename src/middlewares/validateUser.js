import { body, validationResult } from "express-validator";
import AppError from "../utils/appError.js";

export const validateUser = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Please enter a valid email address"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("status")
    .optional()
    .isIn(["active", "disable"])
    .withMessage("Status is invalid"),
  body("role")
    .optional()
    .isIn(["admin", "user"])
    .withMessage("Role is invalid"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new AppError(
          errors
            .array()
            .map((err) => err.message)
            .join(", "),
          400
        )
      );
    }
    next();
  },
];
