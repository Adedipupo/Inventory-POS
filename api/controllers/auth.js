import User from '../models/userModel.js'
import bcrypt from 'bcryptjs'
import sendEmail from '../utils/sendEmail.js'
import { generateToken, verifyToken } from '../utils/generateToken.js'

export const signUp = async (req, res) => {
  // signup business logic goes here
}

export const login = async (req, res) => {
    // login business logic goes here
  }

// forgot password functionality
export const forgotPassword= async (req, res) => {
  const { email } = req.body
  const user = await User.findOne({ email: email }).exec()
  if (!user) {
    return res.status(401).json({
      status: 'error',
      error: 'Email doesnt exist'
    })
  }

  const token = generateToken(user._id)   
  const link = `${process.env.BASE_URL}/auth/resetPassword/${user._id}/${token}`

  sendEmail(
    email,
    'Password Reset',
    `hello ${user.firstName}, you requested a change in your password you can reset it using this link ${link}.
      The link expires in ten mins`,
    res
  )
}

// password reset endpoint
export const passwordReset = async (req, res) => {
  const { id, token } = req.params
  const verify = verifyToken(token)
  const userid = verify.id
  const { password } = req.body
  const user = await User.findById({ _id: id })

  if (!user) {
    return res.status(401).json({
      status: 'error',
      error: 'User does not exist'
    })
  }

  if (userid !== id) {
    return res.status(401).json({
      status: 'error',
      error: 'unauthorised user'
    })
  }
  const saltRounds = 10
  const salt = await bcrypt.genSalt(saltRounds)
  const hashedPassword = await bcrypt.hash(password, salt)

  await User.findOneAndUpdate(
    { id },
    {
      password: hashedPassword
    },
    {
      new: true
    }
  )
  return res.status(201).json({
    status: 'success',
    data: {
      message: 'Password Successfully Updated'
    }
  })
}
