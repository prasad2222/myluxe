const joi = require('joi');

const registerValidation = joi.object({
    first_name: joi.string().min(3).max(30).required(),
    last_name: joi.string().min(3).max(30).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).required(),
    mobile_num: joi.string().min(10).max(15).required(),
    gender: joi.string().valid('male','female','other').required()
});

const loginValidation = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(6).required()
});

module.exports = {
    registerValidation,
    loginValidation
};