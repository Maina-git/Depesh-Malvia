const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`);
});
app.get("/", (req, res)=>{
res.status(200).json({message:"Get all contacts"});
})