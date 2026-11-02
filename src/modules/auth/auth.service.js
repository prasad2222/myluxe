const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const authRepository = require('./auth.repository');

const registerUser = async (data) => {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const result = await authRepository.createUser({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: hashedPassword,
        mobile_num: data.mobile_num,
        gender: data.gender
    });

    if(result.affectedRows === 1){

        console.log("User registered successfully");
        return {
            success: true,
        };
    }else{
        console.log("User registration failed");
        return {
            success: false
        };
    }

}

const loginUser = async (data) => {

    const loginResult = await authRepository.loginUser({
        email: data.email,
        password: data.password
    });

    console.log("Login Result: ", loginResult);

    if( bcrypt.compareSync(data.password, loginResult[0].password) ){
        const user = loginResult[0];
        const token = jwt.sign({id: user.id,email: user.email}, process.env.JWT_SECRET, {expiresIn: '1h'});

        console.log("User logged in successfully");
        
        return {
            success: true,
            token: token
        };
    }else{
        console.log("User login failed");
        return {
            success: false
        };
    }

}

module.exports = {
    registerUser,
    loginUser
}
