import { loginUserRepository } from "../repository/AuthRepository.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

const secretkey = process.env.SECRET_KEY;

export const loginUserUseCase = async (email, password) => {
  const existingUser = await loginUserRepository(email);

  if (!existingUser) {
    return res.status(404).json({ message: "User Not Found" });
  }

  const isConfirmed = await bcrypt.compare(password, existingUser.password);

  if (!isConfirmed) {
    res.status(401).json({ message: "Invalid Password" });
  }

  const token = jwt.sign(
    {
      userId: existingUser.id,
      email: existingUser.email,
      roleId: existingUser.roleId,
    },
    secretkey,
    {
      expiresIn: "5h",
    },
  );

  return {
    token,
    user: {
      userId: existingUser.id,
      email: existingUser.email,
      roleId: existingUser.roleId,
    },
  };
};
