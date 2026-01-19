import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const secretKey = process.env.SECRET_KEY;
const refreshSecretKey = process.env.REFRESH_SECRET_KEY;

const verifyToken = (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(403).json({ message: "Token is Missing" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid Token" });
  }
};

const refreshToken = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(403).json({ message: "No Refresh Token" });
  }

  try {
    const decoded = jwt.verify(refreshToken, refreshSecretKey);

    //Create a NEW access token
    const newAccessToken = jwt.sign(
      {
        userId: decoded.userId,
        email: decoded.email,
        roleId: decoded.roleId,
      },
      process.env.SECRET_KEY,
      { expiresIn: "2h" },
    );

    res.json({ accessToken: newAccessToken });
  } catch (error) {
    return res.status(401).json({ error: "Invalid Token" });
  }
};

export default { verifyToken, refreshToken };
