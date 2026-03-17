const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please add contact for number"]
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




