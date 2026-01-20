import {
  forgotPasswordUseCase,
  loginUserUseCase,
  verifyOtpUseCase,
  resetPasswordUseCase
} from "../usecase/AuthUseCase.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token } = await loginUserUseCase(email, password);

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 5 * 60 * 60 * 1000,
      secure: true,
      sameSite: "none",
    });

    // res.cookie("refreshToken", refreshToken, {
    //   httpOnly: true,
    //   secure: true,
    //   sameSite: "strict",
    // });

    return res.status(200).json({ message: "User login Successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const result = forgotPasswordUseCase(email);

    return res.status(200).json({ message: "User login Successfully", result });
  } catch (error) {}
};

export const verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const result = await verifyOtpUseCase(email, otp);

    return res.status(200).json({ message: "OTP Verified", result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  const { email , password } = req.body;
  try {
    const result = resetPasswordUseCase(email,password);

    return res.status(200).json({ message: "Password Reset Successfully", result });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
