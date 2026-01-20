import { loginUserRepository , forgotPasswordRepository } from "../repository/AuthRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";
import { sendEmail } from "../util/email.js";

config();

const secretkey = process.env.SECRET_KEY;
const refreshSecretkey = process.env.REFRESH_SECRET_KEY;

export const loginUserUseCase = async (email, password) => {
  const existingUser = await loginUserRepository(email);

  if (!existingUser) {
    return res.status(404).json({ message: "User Not Found" });
  }

  const isConfirmed = await bcrypt.compare(password, existingUser.password);

  if (!isConfirmed) {
    res.status(401).json({ message: "Invalid Password" });
  }

  const payload = {
    userId: existingUser.id,
    email: existingUser.email,
    roleId: existingUser.roleId,
  };

  const token = jwt.sign(payload, secretkey, {
    expiresIn: "2h",
  });

  const refreshToken = jwt.sign(payload, refreshSecretkey, {
    expiresIn: "24h",
  });

  return {
    token,
    refreshToken,
    user: payload,
  };
};

export const forgotPasswordUseCase = async (email) => {
  const OTP = Math.floor(Math.random() * 9000 + 1000);

  await forgotPasswordRepository(email, OTP);

  await sendEmail(email, "Your OTP for Password Reset", "otpEmail", { OTP });
};
