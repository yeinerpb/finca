import User from "../models/UserModel.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//Create a token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Send a token to the user
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

export const createUser = catchAsync(async (req, res, next) => {
  const { name, email, password, status, role } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    status,
    role,
  });
  createSendToken(newUser, 201, res);
});

export const loginUser = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  const user = await User.findOne({ where: { email, status: "active" } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError("Invalid email or password", 400));
  }
  createSendToken(user, 200, res);
});

export const getUsers = catchAsync(async (req, res, next) => {
  const users = await User.findAll();
  if (!users || users.length === 0) {
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
  user.password = undefined;
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

  let updateData = { name, email, status, role };

  if (password) {
    const hashedPassword = await bcrypt.hash(password, 12);
    updateData.password = hashedPassword;
    updateData.passwordChangedAt = new Date();
  } else {
    await user.update({ name, email, status, role });
  }

  await user.update(updateData);

  user.password = undefined;
  res.status(200).json({
    status: "success",
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
  res.status(200).json({
    status: "success",
  });
});
