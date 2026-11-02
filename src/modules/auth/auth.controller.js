
const register = async (req,res) => {

    registerValidation = require('./auth.validation');
    
    console.log("hii");

    const {error} = registerValidation.registerValidation.validate(req.body);

    if(error){
        return res.status(400).json({error: error.details[0].message});
    }

    const authService = require('./auth.service');
    const result = await authService.registerUser(req.body);

    if(result.success){
        return res.status(201).json({message: 'User registered successfully'});
    }else{
        return res.status(500).json({message: 'User registration failed'});
    }
}

const login = async (req,res) => {
    
    loginValidation = require('./auth.validation');
    const {error} = loginValidation.loginValidation.validate(req.body);

    if(error){
        return res.status(400).json({error: error.details[0].message});
    }

    const authService = require('./auth.service');
    const result = await authService.loginUser(req.body);

    if(result.success){
        return res.status(200).json({message: 'User logged in successfully', token: result.token});
    }else{
        return res.status(401).json({message: 'User login failed'});
    }
}

module.exports = {
    register,
    login
}