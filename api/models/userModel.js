import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {type: String,required: true,},
  lastName: {type: String,required: true,},
  email: {type: String,required: true, unique: true},
  phoneNumber: {type: String,required: true,},
  password: {type: String,required: true,},
  role: {type: String,required: true,},
  isApproved: {type: Boolean},
  isAdmin: {type: Boolean},
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

