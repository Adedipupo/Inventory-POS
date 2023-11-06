import { MerchantModel } from '../models/merchantModel.js'
import formatHTTPLoggerResponse, { httpLogger } from './LoggerService.js'

class merchantService {
  /**
   * @method register
   * @static
   * @async
   * @param {string} businessName
   * @param {string} displayName
   * @param {string} businessLogo
   * @param {string} email
   * @param {string} phoneNumber
   * @param {string} businessCode
   * @returns {Promise<Merchant>}
   */

  static async createMerchant(req, res) {
    try {
      const {
        businessName,
        displayName,
        businessLogo,
        email,
        businessCode,
        phoneNumber,
      } = req.body

      const emailExists = await MerchantModel.findOne({ email })

      if (emailExists) {
        return res.status(400).json('Email already used by another Merchant')
      }

      //Create merchant
      const newMerchant = await new MerchantModel({
        email: email.toLowerCase(),
        businessName,
        displayName,
        businessLogo,
        phoneNumber,
        businessCode,
      })
      await newMerchant.save()

      httpLogger.info(
        'Success message',
        formatHTTPLoggerResponse(req, res, newMerchant),
      )
      return res.status(201).json({
        message: 'Merchant successfully created!!!',
        data: newMerchant,
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'Internal Server Error',
        success: false,
      })
    }
  }
}

export default merchantService
