const bcrypt = require('bcryptjs')

const profileRepository = require('./profile.repository');


const getProfileData = async(data) => {

    const {user_id} = data;
    const [result] = await profileRepository.getProfileData({
        user_id: user_id
    });

    console.log('Get Profile service Result', result);
    return {
        success: true,
        data: result
    };
}

const updateProfileData  = async(data) => {

    console.log('Update Profile Data', data);
    const {user_id,first_name,last_name,email,mobile_num,gender} = data;

    const [result] = await profileRepository.updateProfileData({
        user_id: user_id,
        first_name: first_name,
        last_name: last_name,
        email: email,
        mobile_num: mobile_num,
        gender: gender
    });

    console.log('Update Profile service Result', result);

    return {
        success: true,
        data: result
    };
}

const deleteProfileData = async(data) => {
    const {user_id} = data;
    const [result] = await profileRepository.deleteProfileData({
        user_id: user_id
    });
    return {
        success: true,
        data: [result]
    };

}

const changePassword = async(data)=> {

    var result = await profileRepository.changePassword({
        Old_password:data.Old_password,
        email:data.email,
        New_password:bcrypt.hashSync(data.New_password,10)
    });
    
    if(result.affectedRows> 0){
        return {
            success:true,
            data:result
        }
    }else{
        return {
        success:false,
        data:result
    }
    }
}
module.exports = {
    getProfileData,
    updateProfileData,
    deleteProfileData,
    changePassword

}