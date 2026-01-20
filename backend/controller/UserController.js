import { registerUserUsecase } from "../usecase/UserUsecase.js";
import { sendEmail } from "../util/email.js";

export const registerUser = async (req, res) => {
  const { email, name, phoneNumber, password } = req.body;
  try {
    const register = await registerUserUsecase(
      email,
      name,
      phoneNumber,
      password,
    );

    await sendEmail(email, "🎉 Account Created Successfully", "createdEmail", {
      name,
    });

    return res.status(201).json("Registered Successfully!", register);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
