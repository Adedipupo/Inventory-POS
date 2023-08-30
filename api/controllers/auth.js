import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import sendEmail from "../utils/sendEmail.js";
import { generateToken, verifyToken } from "../utils/generateToken.js";
import { userValidationSchema } from "../validation/validation.js";

export const signUp = async (req, res) => {
	// signup business logic goes here
	const { error } = userValidationSchema.validate(req.body);

	if (error)
		return res
			.status(501)
			.json({
				message: `Validation error: ${error.details[0].message}`,
				success: false,
			});

	const { password, ...others } = req.body;
	//Check for password length
	if (password.length < 6)
		return res
			.status(401)
			.json({
				message: `Password must be greater than 5`,
				success: false,
			});
	const hashedPassword = await bcrypt.hash(password, 10);
	//Create user
	const user = await User.create({ ...others, password: hashedPassword });
	//Generate a token
	const token = generateToken(user._id);
	//Store cookie in the request body.
	res.cookie("authorization", token);
	return res.status(201).json({ message: "User successfully created!!!" });
};



export const login = async (req, res) => {
	const { email, password } = req.body;

	const user = await User.findOne({ email });

	if (!user)
		return res
			.status(401)
			.json({
				message: `User with this email does not exist`,
				success: false
			});

	const userPassword = await bcrypt.compare(password, user.password);

	if (!userPassword)
		return res
			.status(401)
			.json({ message: `Please enter a valid password` });

	const token = generateToken(user._id);
	res.cookie("authorization", token);

	return res.status(200).json({ message: "login successful", success: true });
};



// forgot password functionality
export const forgotPassword = async (req, res) => {
	const { email } = req.body;
	const user = await User.findOne({ email: email }).exec();
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
};

// password reset endpoint
export const passwordReset = async (req, res) => {
	const { id, token } = req.params;
	const verify = verifyToken(token);
	const userid = verify.id;
	const { password } = req.body;
	const user = await User.findById({ _id: id });

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

	await User.findOneAndUpdate(
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
};
