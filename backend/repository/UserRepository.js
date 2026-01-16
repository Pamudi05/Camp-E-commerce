import { pool } from "../db/dbConnection.js";
import bcrypt from "bcrypt";

export const create = async (email, name, phoneNumber, password, res) => {
  const db = await pool.getConnection();

  const [existingEmail] = await db.query(`SELECT * FROM users WHERE email=?`, [email]);

  if (existingEmail.length > 0) {
    return res.status(409).json({message : "Email Already Exists"});
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const Query = `INSERT INTO users(email, name, phoneNumber, password, roleId)
        VALUES(?,?,?,?,2)`;

  try {
    const [result] = await db.query(Query, [email,name,phoneNumber,hashPassword]);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    db.release();
  }
};
