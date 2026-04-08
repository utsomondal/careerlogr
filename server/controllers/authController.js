const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getDB } = require("../config/db");

// Helper: cookie config
const getCookieOptions = () => {
  const isProd = process.env.NODE_ENV === "production";

  return {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "None" : "Lax",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };
};

// register controller
const register = async (req, res) => {
  try {
    const db = getDB();
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and password are required",
      });
    }

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const now = new Date().toISOString();

    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: now,
      updatedAt: now,
    });

    const token = jwt.sign(
      { userId: result.insertedId, email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, getCookieOptions());

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: {
          id: result.insertedId,
          name,
          email,
          createdAt: now,
        },
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// login controller
const login = async (req, res) => {
  try {
    const db = getDB();
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, getCookieOptions());

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// logout controller
const logout = (req, res) => {
  res.clearCookie("token", getCookieOptions());

  res.status(200).json({
    success: true,
    message: "Logout successful",
  });
};

// get current user
const getMe = async (req, res) => {
  res.status(200).json({
    success: true,
    data: { user: req.user },
  });
};

module.exports = { register, login, logout, getMe };
