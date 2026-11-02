
const express = require('express');

const router = express.Router();
const profileController = require('./profile.controller');

console.log('Profile Routes Loaded');

router.get('/getProfile', profileController.getProfile);
router.put('/updateProfile', profileController.updateProfile);
router.delete('/deleteProfile', profileController.deleteprofile);
router.put('/changePassword', profileController.changePassword);
// router.put('/forgotPassword', profileController.forgotPassword);

module.exports = router;