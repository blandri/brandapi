import res from 'express/lib/response';
import { articleSchema, commentSchema, userSchema } from './articleSchema';

export const articleValidation = async (req, res, next) => {
  const tit = await articleSchema.validate(req.body);
  const cont = await articleSchema.validate(req.body);
  if (tit.error) {
    res.json({
      error: 1,
      message: tit.error.details[0].message,
    });
  } else if (cont.error) {
    res.json({
      error: 1,
      message: cont.error.details[0].message,
    });
  } else {
    next();
  }
};

export const userValideation = async (req, res, next) => {
  const emeli = await userSchema.validate(req.body);
  const pass = await userSchema.validate(req.body);
  if (emeli.error) {
    res.json({
      error: 1,
      message: emeli.error.details[0].message,
    });
  } else if (pass.error) {
    res.json({
      error: 1,
      message: pass.error.details[0].message,
    });
  } else {
    next();
  }
};

export const commentValidation = async (req, res, next) => {
  const name = await commentSchema.validate(req.body);
  const comment = await commentSchema.validate(req.body);

  if (name.error) {
    res.json({
      error: 1,
      message: name.error.details[0].message,
    });
  } else if (comment.error) {
    res.json({
      error: 1,
      message: comment.error.details[0].message,
    });
  }
};
