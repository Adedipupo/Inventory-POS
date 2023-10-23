import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

export const verifyUser = asyncHandler(async (req, res, next) => {
  try {
    const token = req.cookies.authorization
    console.log('tokennn', token)

    if (!token) {
      res.status(401)
      throw new Error('Not authorized, please login')
    }

    console.log('hweee')
    // Verify Token
    const verified = jwt.verify(token, process.env.JWT_SECRET)
    console.log('verr', verified)
    // Get user id from token
    const user = await UserModel.findById(verified.id).select('-password')
    console.log('user4321', user)

    if (!user) {
      res.status(401)
      throw new Error('User not found')
    }
    req.user = user
    next()
  } catch (error) {
    res.status(401)
    throw new Error('Not authorized, please login')
  }
})
