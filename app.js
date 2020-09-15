const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const userRouter = require("./user");
const homeRouter = require("./home");
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(userRouter.userRouter);
app.use(homeRouter);

app.use(express.static(path.join(__dirname,'styles')));

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'pages','404.html'));
});

app.listen(3000);
