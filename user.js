const express = require('express');
const path = require('path');
const router = express.Router();

const users = [];

router.use("/users", (req,res,next)=>{
    res.sendFile(path.join(__dirname,"pages","user.html"));
});

router.post("/message",(req,res,next) => {
    res.redirect("/");
    users.push({title : req.body.inpVal}); 
});

module.exports = {
    userRouter : router,
    userArray : users
}
