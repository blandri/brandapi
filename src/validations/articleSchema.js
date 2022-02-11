import joi from 'joi';

export const articleSchema = joi.object({
  title: joi.string().required().max(90).min(3),
  content: joi.string().min(10).required().messages({
    'string.empty': 'content must not be empty',
    'string.max.base': 'content should be 10 characters long',
  }),
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
