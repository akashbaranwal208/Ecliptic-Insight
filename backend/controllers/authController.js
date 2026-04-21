import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// 🔥 SIGNUP FUNCTION
export const signup = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 🔥 role logic
    let role = "client";

    if (email.endsWith("@eclipticinsight.com")) {
      role = "employee";
    }

    // create user
    const user = new User({
      fullName,
      email,
      password: hashedPassword,
      role,
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// 🔥 LOGIN FUNCTION
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    // ✅ FIXED TOKEN
    const token = jwt.sign(
      {
        id: user._id,
        name: user.fullName, // 🔥 IMPORTANT FIX
        role: user.role,
      },
      "secretKey", // ✅ KEEP SAME
      { expiresIn: "1d" }
    );

    res.json({
      token,
      role: user.role,
      name: user.fullName,
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};