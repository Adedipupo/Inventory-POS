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

        console.log("users");
      const users = await UserModel.find();
      console.log("users", users);

      if (users) {
        httpLogger.info(
            'Success message',
            formatHTTPLoggerResponse(req, res, users),
          )
    
        return res.status(401).json({
          message: `Users retrieved successfully`,
          data: users
        })
      }

    } catch (error) {
      console.log(error)
      httpLogger.error('Failure message', 
      formatHTTPLoggerResponse(req, res, 
      { message: error })
    )
      return res.status(500).json({
        message: 'Internal Server Error',
        success: false,
      })
    }
  }

}

export default userService;