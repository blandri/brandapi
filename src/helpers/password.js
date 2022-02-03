import bcrypt from 'bcrypt';
import User from '../models/user';

const salt = bcrypt.genSaltSync(10, 'b');

export const hashPassword = (plainPassword) => {
  const hash = bcrypt.hashSync(plainPassword, salt);
  return hash;
};

export const comparePassword = async (fp, cp) => {
  if (fp === cp) {
    return true;
  }
};
