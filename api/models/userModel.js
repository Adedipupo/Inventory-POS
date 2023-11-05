import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
  firstName: {type: String,required: true,},
  lastName: {type: String,required: true,},
  email: {type: String,required: true, unique: true},
  phoneNumber: {type: String,required: true,},
  password: {type: String,required: true,},
  role: {
    type: String,
    enum: ["customer", "merchant", "admin", "superAdmin"],
    default: "customer",
    required: true,
  },
  isVerified: {type: Boolean},
  isAdmin: {type: Boolean},
  isMerchant : {type: Boolean},
  isSuperAdmin: {type: Boolean},
  lastChangedPassword: {type: Date}
});

userSchema.pre("save",async function (next) {
  if(!this.isModified("password")){
      next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt); 
});

export const UserModel = mongoose.model('User', userSchema);

