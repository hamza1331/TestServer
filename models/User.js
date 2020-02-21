const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  email:{
      type:String,
      required:[true,'Email is required']
  },
  fName:{
      type:String,
      required:[true,'Full Name is required']
  },
  lName:{
    type:String,
    required:[true,'Full Name is required']
}
});

UserSchema.index({name:'text','fName':"text"})
module.exports = mongoose.model('Users', UserSchema);