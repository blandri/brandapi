import { articleSchema } from './articleSchema';

export const articleValidation = async (req, res, next) => {
  const value = await articleSchema.validate(req.body);
  if (value.error) {
    res.json({
      error: 1,
      message: 'title must be a string',
    });
  } else {
    next();
  }
};
