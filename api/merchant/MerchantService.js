import { MerchantModel } from './merchantModel.js'
import formatHTTPLoggerResponse, { httpLogger } from '../services/LoggerService.js'

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

  /**
   * Get all merchants
   * @return {Promise<Array<Merchant>>}
   */

  static async getMerchants(req, res) {
    try {
      const merchants = await MerchantModel.find()

      if (merchants) {
        httpLogger.info(
          'Success message',
          formatHTTPLoggerResponse(req, res, merchants),
        )

        return res.status(401).json({
          message: `Merchants retrieved successfully`,
          data: merchants,
        })
      }
    } catch (error) {
      console.log(error)
      httpLogger.error(
        'Failure message',
        formatHTTPLoggerResponse(req, res, { message: error }),
      )
      return res.status(500).json({
        message: 'Internal Server Error',
        success: false,
      })
    }
  }

    /**
   * @method getMerchant
   * @static
   * @async
   * @return {Promise<Array<Merchant>>}
    */

     static async getAMerchant(req, res) {
      try {
        const { id } = req.params
        const merchant = await MerchantModel.findById({ _id: id }).select('-password')
  
        if (merchant) {
          httpLogger.info(
            'Success message',
            formatHTTPLoggerResponse(req, res, merchant),
          )
  
          return res.status(200).json({
            message: `Merchant retrieved successfully`,
            data: merchant,
          })
        } else {
          httpLogger.error(
            'Error message',
            formatHTTPLoggerResponse(req, res, merchant),
          )
          return res.status(404).json({
            message: 'Merchant not found',
          })
        }
      } catch (error) {
        console.log(error)
        httpLogger.error(
          'Failure message',
          formatHTTPLoggerResponse(req, res, { message: error }),
        )
        return res.status(500).json({
          message: 'Internal Server Error',
          success: false,
        })
      }
    }
}

export default merchantService
