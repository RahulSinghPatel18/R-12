const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
 username:{
    type: String,
    trim : true,
    unique: true,
    require:[true, "username is required"],
    minLenght: [3,"username must be at least 3 characeters"]
 },
 email: {
    type: String,
    lowercase: true,
    required: 'Email address is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
},
 password:{
    type: String,
    require:[true, "password is required"],
    minLenght: [3,"password must be at least 3 characeters"],
    maxLenght: [15,"password more then 15 characters"],
},
},
 {timestamps: true}

);


const user = mongoose.model("user", userModel);
module.exports= user