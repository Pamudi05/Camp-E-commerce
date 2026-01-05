import { pool } from "../db/dbConnection.js";
import bcrypt from "bcrypt";

export const create = async (email, name, phoneNumber, password) => {
  const reg = await pool.getConnection();

  const [existingEmail] = await reg.query(`SELECT id FROM users WHERE email=?`, [email]);

  if (existingEmail.length > 0) {
    throw new Error ("Email Already Exists")
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const Query = `INSERT INTO users(email, name, phoneNumber, password, roleId)
        VALUES(?,?,?,?,(SELECT id FROM roles WHERE role = 'customer'))`;

  try {
    const [result] = await reg.query(Query, [
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
    reg.release();
  }
};
