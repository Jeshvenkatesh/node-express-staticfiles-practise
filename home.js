const express = require('express');
const userData = require('./user');
const path = require('path');

const router = express.Router();

router.get("/", (req,res,next)=>{
    res.sendFile(path.join(__dirname,'pages','home.html'));
    console.log(userData.userArray);
});

module.exports = router;