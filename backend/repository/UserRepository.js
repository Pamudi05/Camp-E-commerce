import { pool } from "../db/dbConnection.js";
import bcrypt from "bcrypt";

export const create = async (email, name, phoneNumber, password) => {
  const db = await pool.getConnection();

  try {
    const [existingEmail] = await db.query(
      `SELECT * FROM users WHERE email=?`,
      [email],
    );

    if (existingEmail.length > 0) {
      throw new Error("Email Already Exists");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const Query = `INSERT INTO users(email, name, phoneNumber, password, roleId)
        VALUES(?,?,?,?,2)`;

    const [result] = await db.query(Query, [
      email,
      name,
      phoneNumber,
      hashPassword,
    ]);

    return result;
    
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    db.release();
  }
};
