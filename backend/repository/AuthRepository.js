import { pool } from "../db/dbConnection.js";
import redisClient from "../util/redisClient.js";

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

export const verifyOtpRepository = async (email,OTP)=> {
  const currentOtp = await redisClient.get(`otp:${email}`);

  if (!currentOtp) {
    throw new Error("OTP expired or not found");
  }

  if (currentOtp !== OTP) {
    throw new Error("Invalid OTP");
  }

  await redisClient.del(`otp:${email}`);

  return true;
}