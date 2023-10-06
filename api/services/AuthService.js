import { UserModel } from "../models/userModel.js";
import { validateUser } from "../validation/joiValidation.js";
import Token from "../utils/generateToken.js";

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

  static async signUp(req, res) {
    try {
      const { error } = validateUser.validate(req.body);

      if (error)
        return res.status(501).json({
          message: `Validation error: ${error.details[0].message}`,
          success: false,
        });

      const { firstName, lastName, email, password, phoneNumber } = req.body;

      const userExists = await UserModel.findOne({ email });
      console.log("userExists",userExists)
      if (userExists) {
        return res.status(400).json("User already exists");
      }

      //Create user
      const newUser = await new UserModel({
        email: email.toLowerCase(),
        firstName,
        lastName,
        password,
        phoneNumber,
      });
      await newUser.save();

      //Generate a token
      const token = Token.generateToken(newUser._id);
      console.log("Promise.resolve(token)",Promise.resolve(token))
      newUser.password = undefined;
      //Store cookie in the request body.
      res.cookie("authorization", token);
      return res.status(201).json({
        message: "User successfully created!!!",
        data: newUser,
        token: Promise.resolve(token),
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal Server Error",
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

  static async login(req, res) {
    try {
      const { email, password } = req.body;

      const user = await UserModel.findOne({ email });

      if (!user)
        return res.status(401).json({
          message: `User with this email does not exist`,
        });

      const userPassword = await bcrypt.compare(password, user.password);

      const token = generateToken(user._id);
      res.cookie("authorization", token, {
        path: "/",
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 86400),
        // sameSite: "none",
        // secure: true,
      });

      if (user && userPassword) {
        const { _id, lastName, firstName, email, phoneNumber } = user;
        return res.status(200).json({
          success: true,
          message: "login successful",
          data: {
            _id,
            lastName,
            firstName,
            email,
            phoneNumber,
          },
          token: token,
        });
      } else {
        return res.status(401).json({ message: `Invalid Credentials!!!` });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal Server Error",
        success: false,
      });
    }
  }

  /**
   * @method forgotPassword
   * @static
   * @async
   * @param {string} email
   * @returns //...
   */
  static async forgotPassword(req, res) {
    try {
      const { email } = req.body;
      const user = await UserModel.findOne({ email });
      console.log("user", user);
      if (!user) {
        return res.status(401).json({
          status: "error",
          error: "Email doesnt exist",
        });
      }
      const token = generateToken(user._id);
      const link = `${process.env.BASE_URL}/auth/resetPassword/${user._id}/${token}`;

      sendEmail(
        email,
        "Password Reset",
        `hello ${user.firstName}, you requested a change in your password you can reset it using this link ${link}.
          The link expires in ten mins`,
        res
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal Server Error",
        success: false,
      });
    }
  }

  /**
   * @method resetPassword
   * @static
   * @async
   * @param {string} token
   * @param {string} id
   * @param {string} password
   * @returns //...
   */

  static async resetPassword(req, res) {
    try {
      const { id, token } = req.params;
      const verify = verifyToken(token);
      const userid = verify.id;
      const { password } = req.body;
      const user = await UserModel.findById({ _id: id });

      if (!user) {
        return res.status(401).json({
          status: "error",
          error: "User does not exist",
        });
      }

      if (userid !== id) {
        return res.status(401).json({
          status: "error",
          error: "unauthorised user",
        });
      }
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(password, salt);

      await UserModel.findOneAndUpdate(
        { id },
        {
          password: hashedPassword,
        },
        {
          new: true,
        }
      );
      return res.status(201).json({
        status: "success",
        data: {
          message: "Password Successfully Updated",
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Internal Server Error",
        success: false,
      });
    }
  }
}

export default authService;
