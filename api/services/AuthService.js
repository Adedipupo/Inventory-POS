import { UserModel } from '../models/userModel';
import { validateUser } from '../validation/joiValidation';

class authService {
  /**
   * @method register
   * @static
   * @async
   * @param {string} firstName
   * @param {string} lastName
   * @param {string} email
   * @param {string} phoneNumber
   * @param {string} password
   * @param {string} role
   * @returns {Promise<User>}
   */

  static async signUp(req,res) {
    try {
      const { error } = validateUser.validate(req.body)

      if (error)
        return res.status(501).json({
          message: `Validation error: ${error.details[0].message}`,
          success: false,
        })

      const { firstName, lastName, email, password, phoneNumber } = req.body

      const userExists = await UserModel.findOne({ email })
      if (userExists) {
        res.status(400)
        throw new Error('User already exists')
      }

      //Create user
      const newUser = await new UserModel({
        email: email.toLowerCase(),
        firstName,
        lastName,
        password,
        phoneNumber,
      })
      await newUser.save()

      //Generate a token
      const token = generateToken(newUser._id)
      newUser.password = undefined
      //Store cookie in the request body.
      res.cookie('authorization', token)
      return res.status(201).json({
        message: 'User successfully created!!!',
        data: user,
        token: token,
      })
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'Internal Server Error',
        success: false,
      });
    }
  }

  /**
   * @method login
   * @static
   * @async
   * @param {string} email
   * @param {string} password
   * @returns {Promise<User>}
   */

  static async login(req,res) {
    try {
      const { email, password } = req.body

      const user = await UserModel.findOne({ email })

      if (!user)
        return res.status(401).json({
          message: `User with this email does not exist`,
        })

      const userPassword = await bcrypt.compare(password, user.password)

      const token = generateToken(user._id)
      res.cookie('authorization', token, {
        path: '/',
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
        // sameSite: "none",
        // secure: true,
      })

      if (user && userPassword) {
        const { _id, lastName, firstName, email, phoneNumber } = user
        return res.status(200).json({
          success: true,
          message: 'login successful',
          data: {
            _id,
            lastName,
            firstName,
            email,
            phoneNumber,
          },
          token: token,
        })
      } else {
        return res.status(401).json({ message: `Invalid Credentials!!!` })
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'Internal Server Error',
        success: false,
      });
    }
  }
}

export default authService;
