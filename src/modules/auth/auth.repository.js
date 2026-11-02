const db = require('../../config/db');


const createUser = async (payload) => {

    console.log(payload);
    const {first_name,last_name,email,password,mobile_num,gender} = payload;
    const [result] = await db.execute(
        `Insert into users (first_name,last_name,email,password,mobile_num,gender) 
        values (?,?,?,?,?,?)`,
        [first_name,last_name,email,password,mobile_num,gender]
    );
    console.log(result);
    return result;
}

const loginUser = async (payload) => {

    console.log(payload);
    const {email,password} = payload;
    const [result] = await db.execute(
        `Select * from users where email = ? `,
        [email]
    );
    console.log(result);
    return result;
}

module.exports = {
    createUser,
    loginUser
}