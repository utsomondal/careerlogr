const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getDB } = require("../config/db");
const { ObjectId } = require("mongodb");
const { seedDemoApplications } = require("../utils/seedDemo");

// cookie config
const getCookieOptions = () => {
  return {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  };
};

// register
const register = async (req, res) => {
  try {
    const db = getDB();
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const exists = await db.collection("users").findOne({ email });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashed = await bcrypt.hash(password, 10);
    const now = new Date().toISOString();

    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashed,
      createdAt: now,
      updatedAt: now,
    });

    const token = jwt.sign(
      {
        userId: result.insertedId.toString(),
        email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, getCookieOptions());

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: {
        id: result.insertedId,
        name,
        email,
        createdAt: now,
      },
    });
  } catch (error) {
    console.error("Register error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// login
const login = async (req, res) => {
  try {
    const db = getDB();
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await db.collection("users").findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id.toString(),
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, getCookieOptions());

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// logout
const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    path: "/",
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

// get current user
const getMe = async (req, res) => {
  try {
    const db = getDB();

    const user = await db
      .collection("users")
      .findOne(
        { _id: new ObjectId(req.user.userId) },
        { projection: { password: 0 } },
      );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error("GetMe error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Guest / Demo login
const DEMO_EMAIL = process.env.DEMO_EMAIL;
const DEMO_PASSWORD = process.env.DEMO_PASSWORD;
const DEMO_NAME = "Demo User";

const guestLogin = async (req, res) => {
  try {
    const db = getDB();

    // 1. Find or create demo user
    let user = await db.collection("users").findOne({ email: DEMO_EMAIL });

    if (!user) {
      const hashed = await bcrypt.hash(DEMO_PASSWORD, 10);
      const now = new Date().toISOString();

      const result = await db.collection("users").insertOne({
        name: DEMO_NAME,
        email: DEMO_EMAIL,
        password: hashed,
        isDemo: true,
        createdAt: now,
        updatedAt: now,
      });

      user = {
        _id: result.insertedId,
        name: DEMO_NAME,
        email: DEMO_EMAIL,
      };
    }

    const userId = user._id.toString();

    // 2. Seed sample applications (only if empty)
    await seedDemoApplications(db, userId);

    // 3. JWT + cookie
    const token = jwt.sign(
      { userId, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.cookie("token", token, getCookieOptions());

    return res.status(200).json({
      success: true,
      message: "Guest login successful",
      data: {
        id: user._id,
        name: user.name || DEMO_NAME,
        email: user.email,
        isDemo: true,
      },
    });
  } catch (error) {
    console.error("Guest login error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = { register, login, logout, getMe, guestLogin };
