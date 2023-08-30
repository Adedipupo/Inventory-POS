
import { authService } from '../services/AuthService';

 class AuthController {
  constructor() {
    this.authService = authService;
  }

  /**
   * @route POST api/v1/signup.
   * @desc register a new user endpoint
   * @access Public.
   */
  createUser = async (req, res) => {
    await this.authService.signUp(req, res);
  }
 
  /**
   * @route POST api/v1/login.
   * @desc login a registered user endpoint
   * @access Public.
   */
  loginUser = async (req, res) => {
    await this.authService.login(req, res)
  }

}

export default AuthController;

  // export const forgotPassword = async (req, res) => {
	  // 	const { email } = req.body;
	  // forgot password functionality
// 	const user = await User.findOne({ email: email }).exec();
// 	if (!user) {
// 		return res.status(401).json({
// 			status: "error",
// 			error: "Email doesnt exist",
// 		});
// 	}

// 	const token = generateToken(user._id);
// 	const link = `${process.env.BASE_URL}/auth/resetPassword/${user._id}/${token}`;

// 	sendEmail(
// 		email,
// 		"Password Reset",
// 		`hello ${user.firstName}, you requested a change in your password you can reset it using this link ${link}.
//       The link expires in ten mins`,
// 		res
// 	);
// };

// password reset endpoint
// export const passwordReset = async (req, res) => {
// 	const { id, token } = req.params;
// 	const verify = verifyToken(token);
// 	const userid = verify.id;
// 	const { password } = req.body;
// 	const user = await User.findById({ _id: id });

// 	if (!user) {
// 		return res.status(401).json({
// 			status: "error",
// 			error: "User does not exist",
// 		});
// 	}

// 	if (userid !== id) {
// 		return res.status(401).json({
// 			status: "error",
// 			error: "unauthorised user",
// 		});
// 	}
// 	const saltRounds = 10;
// 	const salt = await bcrypt.genSalt(saltRounds);
// 	const hashedPassword = await bcrypt.hash(password, salt);

// 	await User.findOneAndUpdate(
// 		{ id },
// 		{
// 			password: hashedPassword,
// 		},
// 		{
// 			new: true,
// 		}
// 	);
// 	return res.status(201).json({
// 		status: "success",
// 		data: {
// 			message: "Password Successfully Updated",
// 		},
// 	});
// };
