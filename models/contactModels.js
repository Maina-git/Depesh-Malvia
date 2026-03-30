const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
      user_id:{
     type:mongoose.Schema.Types.ObjectId,
     required:true,
     ref:"User"
    },
    name:{
        type:String,
        required:[true, "Please add contact for name"]
    },
    email:{
        type:String,
        required:[true, "Please add contact email address"]
    },
    phone:{
        type:String,
        required:[true, "Please add the contact phone number"]
    },
},

{
    timeStamps:true
}
)

module.exports = mongoose.model("Contact", contactSchema);




