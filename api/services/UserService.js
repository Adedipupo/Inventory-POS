import { UserModel } from '../models/userModel.js'
import formatHTTPLoggerResponse, { httpLogger } from './LoggerService.js'

class userService {
  /**
   * @method getAllUsers
   * @static
   * @async
   * @returns {Promise<Users>}
   */

  static async getAllUsers(req, res) {
    try {
      const users = await UserModel.find();

      if (users) {
        httpLogger.info(
          'Success message',
          formatHTTPLoggerResponse(req, res, users),
        )

        return res.status(401).json({
          message: `Users retrieved successfully`,
          data: users,
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
   * @method getUser
   * @static
   * @async
   * @returns {Promise<Users>}
   */

  static async getAUser(req, res) {
    try {
      const {id} = req.params
      const user = await UserModel.findById({_id: id}).select('-password');


      if (user) {
        httpLogger.info(
          'Success message',
          formatHTTPLoggerResponse(req, res, user),
        )

        return res.status(200).json({
          message: `Users retrieved successfully`,
          data: user,
        })
      } else {
        httpLogger.error(
          'Error message',
          formatHTTPLoggerResponse(req, res, user),
        )
        return res.status(404).json({
          message: 'User not found',
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

export default userService;
