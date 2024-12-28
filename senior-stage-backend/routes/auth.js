const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// 회원가입 API
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // 사용자 생성
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "회원가입 성공", user: { username, email } });
  } catch (error) {
    res.status(400).json({ error: "회원가입 실패", details: error.message });
  }
});

module.exports = router;
