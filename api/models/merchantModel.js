import mongoose from 'mongoose'

const merchantSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  DisplayName: { type: String, required: true },
  businessLogo: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  businessCode: { type: String, required: true },
  isApproved: { type: Boolean },
})

export const MerchantModel = mongoose.model('Merchant', merchantSchema)
