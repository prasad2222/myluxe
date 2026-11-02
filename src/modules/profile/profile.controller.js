const profileService = require('./profile.service');

const getProfile = async (req, res) => {

    console.log('Get Profile Data', req.body);
    const  result = await profileService.getProfileData(req.body);
    console.log('Get Profile Result', result);

    if(result.success){
        return res.status(200).json({message: 'Profile data fetched successfully', data: result.data});
    }else{
        return res.status(500).json({message: 'Profile data fetch failed'});
    }

}

const updateProfile = async (req, res) => {

    const  result = await profileService.updateProfileData(req.body);
    console.log('Update Profile Result');  

    if(result.success){
        return res.status(200).json({message: 'Profile data updated successfully', data: result.data});
    }else{
        return res.status(500).json({message: 'Profile data update failed'});
    }
}


const deleteprofile = async (req,res) => {

    const  result = await profileService.deleteProfileData(req.body);

    if(result.success){
        return res.status(200).json({message: 'Profile data deleted successfully', data: result.data});
    }else{
        return res.status(500).json({message: 'Profile data deletion failed'});
    }
}

const changePassword = async (req,res) => {

    const  result = await profileService.changePassword(req.body);

    if(result.success){
        return res.status(200).json({message: 'Password changed successfully', data: result.data});
    }else{
        return res.status(500).json({message: 'Password change failed'});
    }
}

const forgotPassword = async (req,res) => {

    const  result = await profileService.forgotPassword(req.body);

    if(result.success){
        return res.status(200).json({message: 'Password reset successfully', data: result.data});
    }else{
        return res.status(500).json({message: 'Password reset failed'});
    }
}

module.exports = {
    getProfile,
    updateProfile,
    deleteprofile,
    changePassword,
    forgotPassword

}