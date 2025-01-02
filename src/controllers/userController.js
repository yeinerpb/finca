import User from "../models/UserModel";
import AppError from "../utils/appError";
import catchAsync from "../utils/catchAsync";

export const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, status, role } = req.body;
  const newUser = await User.create({ name, email, password, status, role });
  newUser.password = undefined;
  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});

export const getUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();
  if (!users) {
    return next(new AppError("No users found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      users,
    },
  });
});

export const getUserById = catchAsync(async (req, res, next) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return next(new AppError("User not found", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

export const updateUser = catchAsync(async (req, res, next) => {
  const { name, email, password, status, role } = req.body;
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) {
    return next(new AppError("User not found", 404));
  }
  await user.update({ name, email, password, status, role });
  user.password = undefined;
  res.status(200).json({
    status: "Success",
    data: {
      user,
    },
  });
});

export const deleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) {
    return next(new AppError("User not found", 404));
  }
  await user.update({ status: "disable" });
  res.status(204).json({
    status: "success",
  });
});
