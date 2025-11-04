const express = require("express");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes")


dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`);
});

app.use("/api/contacts", contactRoutes);

app.get("/", (req, res)=>{
res.status(200).json({message:"Get all contacts"});
})