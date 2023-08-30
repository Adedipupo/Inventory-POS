import Joi from 'joi';

export const validateUser = Joi.object({
    firstName: Joi.string().min(3).max(30).required().error(new Error('first name is required.')),
    lastName: Joi.string().min(3).max(30).required().error(new Error('last name is required')),
    email: Joi.string().email({minDomainSegments: 2, tlds: {allow: false}}).required(),
    phoneNumber: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .message('Invalid phone number format')
    .required(),
    password: Joi.string().required().error(new Error('password is required.')),
    role: Joi.string().valid('manager', 'supervisor', 'sales rep', 'customer').default('customer'),
    isApproved: Joi.boolean().default(false),
    isAdmin: Joi.boolean().default(false),
    lastChangedPassword: Joi.date().default(Date.now())
});