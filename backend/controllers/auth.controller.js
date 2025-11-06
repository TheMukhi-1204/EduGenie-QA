import {
  checkUserExists,
  generateToken,
  sendOtp,
  verifyOtp,
} from "./helperFunctions.js";
import bcrypt from "bcrypt";

// SIGNUP
export const signup = async (req, res) => {
  try {
    const user = req.body;
    const result = await sendOtp(user, "signup");
    return res.status(result.status).json({ message: result.message });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// FORGOT PASSWORD
export const forgotPassword = async (req, res) => {
  try {
    // const {newPassword,email,confirmPassword,type} = req.body;
    const user={
      email:req.body?.email,
      password:req.body?.newPassword,
      type:req.body?.type
    }
    const result = await sendOtp(user, "reset");
    return res.status(result.status).json({ message: result.message });
  } catch (err) {
    console.error("Password Reset error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

//LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "Email and password required" });

    const user = await checkUserExists(email);
    if (!user) return res.status(404).json({ message: "User not found" });
   
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken(user);
    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        year: user.year,
      },
    });
  } catch (err) {
    console.error("loginFlow error:", err);
    res.status(500).json({ message: "Login failed" });
  }
};
