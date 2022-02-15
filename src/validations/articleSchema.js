import joi from 'joi';

export const articleSchema = joi.object({
  title: joi.string().max(90).min(3).required(),
  content: joi.string().min(10).required(),
});

export const userSchema = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'fr'] } })
    .messages({
      'string.empty': 'content must not be empty',
      'string.tlds.base': 'emails allowed are .com and .fr',
      'string.minDomainSegments.base': 'email not valid',
    }),
  password: joi.string().min(3),
});

export const commentSchema = joi.object({
  name: joi.string().min(3),
  comment: joi.string(),
});
