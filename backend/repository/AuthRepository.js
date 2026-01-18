import { pool } from "../db/dbConnection.js";

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
