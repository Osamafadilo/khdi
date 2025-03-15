import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password, userType } = req.body;

  const user = await User.findOne({ email, userType });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      userType: user.userType,
      serviceType: user.serviceType,
      language: user.language,
      direction: user.direction,
      theme: user.theme,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, userType, serviceType } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const userData = {
    name,
    email,
    password,
    userType,
  };

  if (userType === "provider" && serviceType) {
    userData.serviceType = serviceType;
  }

  const user = await User.create(userData);

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      userType: user.userType,
      serviceType: user.serviceType,
      language: user.language,
      direction: user.direction,
      theme: user.theme,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      userType: user.userType,
      serviceType: user.serviceType,
      language: user.language,
      direction: user.direction,
      theme: user.theme,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.language = req.body.language || user.language;
    user.direction = req.body.direction || user.direction;
    user.theme = req.body.theme || user.theme;

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      userType: updatedUser.userType,
      serviceType: updatedUser.serviceType,
      language: updatedUser.language,
      direction: updatedUser.direction,
      theme: updatedUser.theme,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Auth user with social media
// @route   POST /api/users/social-login
// @access  Public
const socialLogin = asyncHandler(async (req, res) => {
  const { email, name, userType, socialProvider } = req.body;

  let user = await User.findOne({ email, userType });

  // If user doesn't exist, create a new one
  if (!user) {
    user = await User.create({
      name,
      email,
      password: Math.random().toString(36).slice(-8), // Generate random password
      userType,
    });
  }

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    userType: user.userType,
    serviceType: user.serviceType,
    language: user.language,
    direction: user.direction,
    theme: user.theme,
    token: generateToken(user._id),
  });
});

export {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  socialLogin,
};
