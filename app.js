const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/login", (req,res,next)=>{
    res.sendFile( __dirname + "/views/login.html");
})

app.get("/profile", (req,res,next)=>{
    res.sendFile( __dirname + "/views/profile.html");
})

app.get("/about", (req,res,next)=>{
    res.sendFile( __dirname + "/views/about.html");
})

app.listen(3000,()=>{
    console.log("listen ... Port 3000")
})