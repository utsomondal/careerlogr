const express = require("express");
const router = express.Router();
const {
  register,
  login,
  logout,
  getMe,
  guestLogin,
} = require("../controllers/authController");
const { protect } = require("../middleware/auth");

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/guest", guestLogin);
router.get("/me", protect, getMe);

module.exports = router;
