const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true 
  },
  email: { 
    type: String,
    required: true, 
    unique: true 
  },
  //hashed Password
  hashedPassword: { 
    type: String, 
    required: true 
  }
  ,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  roles:[{
    type: String
  }],
  versionKey: false
});

module.exports= mongoose.model('User',UserSchema)