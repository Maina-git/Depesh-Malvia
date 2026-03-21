const express = require("express");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes")
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler")
const connectDb = require("./config/db");

dotenv.config();
const app = express();
const PORT = process.env.PORT;


app.use(express.json());
//app.use(cors());
//error handler middleware
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`app running on port ${PORT}`);
});

connectDb();

app.use("/api/contacts", contactRoutes);

app.get("/", (req, res)=>{
res.status(200).json({message:"Get all contacts"});
});



 






