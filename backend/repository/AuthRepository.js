import { pool } from "../db/dbConnection.js";
import redisClient from "../util/redisClient.js";
import bcrypt from "bcrypt";

const db = await pool.getConnection();

export const loginUserRepository = async (email) => {
  try {
    const [rows] = await db.query(
      "SELECT id, email, password, roleId FROM users WHERE email = ?",
      [email],
    );

    return rows[0];
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    db.release();
  }
};

export const forgotPasswordRepository = async (email, OTP) => {
  await redisClient.set(`otp:${email}`, OTP, {
    EX: 300, // 300 seconds = 5 minutes
  });
  return true;
};

export const verifyOtpRepository = async (email, OTP) => {
  const currentOtp = await redisClient.get(`otp:${email}`);

  if (!currentOtp) {
    throw new Error("OTP expired or not found");
  }

  if (currentOtp !== OTP) {
    throw new Error("Invalid OTP");
  }

  await redisClient.del(`otp:${email}`);

  return true;
};

export const resetPasswordRepository = async (email, newPassword) => {
  try {
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const [result] = await db.query(
      "UPDATE users SET password = ? WHERE email = ?",
      [hashedPassword, email],
    );

    if (result.affectedRows === 0) {
      throw new Error("User not found");
    }

    return result;
  } finally {
    db.release();
  }
};
