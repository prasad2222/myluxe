const bcrypt = require('bcryptjs');
const db = require('../../config/db');


const getProfileData  = async (data) => {

    const {user_id} = data;
    const [result] = await db.execute(
        "Select * from users where id = ? ", [user_id]);
    return result;
}

const updateProfileData = async (data) => {

    const {user_id,first_name,last_name,email,mobile_num,gender} = data;
    const [result] = await db.execute(
        `Update users set first_name = ?, last_name = ?, email = ?, mobile_num = ?, gender = ? where id = ?`,
        [first_name,last_name,email,mobile_num,gender,user_id]
    );
    console.log('Update Profile Repository Result', result);
    return [result];
}

const deleteProfileData = async (data) => {

    const {user_id} = data;
    const [result] = await db.execute(
        `Delete from users where id = ?`,
        [user_id]
    );
    return [result];
}

const changePassword = async(data) => {
    const {Old_password,email,New_password} = data;

    // console.log(`${New_password}`);
    const [EmailResult] = await db.execute(`select password from users where email = ?`,[email]);
    console.log(EmailResult);

    if(bcrypt.compareSync(Old_password,EmailResult[0].password)){

        const [result] = await db.execute(`update users
            set password = ? where email= ?`,[New_password,email])
        console.log(`updated Password ${result}`);
        return result;
    }else{
        return false;
    }
}

module.exports = {
    getProfileData,
    updateProfileData,
    deleteProfileData,
    changePassword
}