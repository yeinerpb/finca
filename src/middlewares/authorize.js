import AppError from "../utils/appError.js";

export const authorize = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user.role;

    if (allowedRoles.includes(userRole)) {
      console.log("Authorization successful!");
      return next();
    } else {
      console.log("Authorization failed!");
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
  };
};
