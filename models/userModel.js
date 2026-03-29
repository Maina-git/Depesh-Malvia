const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please add a new user name"]
    },
    email:{
        type:String,
        required:[true, "Please add the  user email address"],
        unique:[true, "Email address already taken"]
    },
    password:{
        type:String,
        required:[true, "Please add the user password"]
    },
},
{ 
timesramps:true
}
);

module.exports = mongoose.model("User", userSchema);








