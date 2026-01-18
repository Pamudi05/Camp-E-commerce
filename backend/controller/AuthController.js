import {loginUserUseCase} from '../usecase/AuthUseCase.js';

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token, user } = await loginUserUseCase(email, password );

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 5 * 60 * 60 * 1000,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({ message: "User login Successfully", user });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};
