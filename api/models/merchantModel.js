import mongoose from 'mongoose'

const merchantSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     required: true,
//     ref: 'User',
//   },
  businessName: { type: String, required: true },
  displayName: { type: String, required: true },
  businessLogo: { type: String},
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  businessCode: { type: String},
  isApproved: { type: Boolean },
})

export const MerchantModel = mongoose.model('Merchant', merchantSchema)
