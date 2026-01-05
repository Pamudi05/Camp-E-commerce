import { create } from "../repository/UserRepository.js";

export const registerUserUsecase = async (
  email,
  name,
  phoneNumber,
  password
) => {
  return await create(email, name, phoneNumber, password);
};
