import 'dotenv/config';
import jwt from 'jsonwebtoken';

export const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    await jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    res.status(401).send({ message: 'please login first' });
  }
};
