const asyncHandler = require("express-async-handler")
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const registerUser = asyncHandler(async(req, res)=>{

const {name , email, password} = req.body;
if(!name || !email || !password){
    res.status(400);
    throw new Error("Please fill in all the fields");
}
const userAvailable = await  User.findOne({email});
if(userAvailable){
    res.status(400);
    throw new Error("User already registered");
}
const hasedPassword = await bcrypt.hash(password, 10);
console.log("Hashed password", hasedPassword);
const newUser = await User.create({
    name,
    email,
    password: hasedPassword
});
console.log(`User created ${newUser}`);

if(newUser){
    res.status(201).json({_id: newUser.id, email: newUser.email});
}
res.status(201).json({message:"User registered successfully"});
    res.json({message:"Register the User"});
});

const loginUser = asyncHandler(async(req, res)=>{
const {email, password} = req.body;
if(!email || !password){
    res.status(400);
    throw new Error("Please fill in all the fields");
}
const existingUser = await User.findOne({email});
if(existingUser && (await bcrypt.compare(password, existingUser.password))){
    const accessToken = jwt.sign({
        user:{
            username: existingUser.name,
            email: existingUser.email
        }
    }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m"
    });
    res.status(200).json({accessToken});
} else {
    res.status(401);
    throw new Error("Invalid email or password");
}
    res.json({message:"Login the User"});
});

const currentUser = asyncHandler(async(req, res)=>{
    res.json(req.user);
});

module.exports = {registerUser, loginUser, currentUser };












