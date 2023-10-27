import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import { UserModel } from '../models/userModel.js'

export const verifyUser = asyncHandler(async (req, res, next) => {
  try {
    let token

    if (req.cookies.token) {
      try {
        token = req.cookies.token
        // Verify Token
        const verified = jwt.verify(token, process.env.JWT_SECRET)
        // Get user id from token
        const user = await UserModel.findById(verified.id).select('-password')

        if (!user) {
          res.status(401)
          throw new Error('User not found')
        }
        req.user = user
        next()
      } catch (error) {
        res.status(403);
        throw new Error("You don't have permission to perform this action");
      }
    }
  } catch (error) {
    res.status(500)
    throw new Error('Server Error')
  }
});

export const verifyAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
      next()
  } else {
    res.status(403);
    throw new Error("You don't have permission to perform this action");
  }
});

export const verifyMerchant = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role == 'merchant') {
    next();
  } else {
    res.status(403);
    throw new Error("You don't have permission to perform this action");
  }
});

export const verifySuperAdmin = asyncHandler(async (req, res, next) => {
  if (req.user && req.user.role === 'superadmin') {
    next();
  }else{
    res.status(403);
    throw new Error("You don't have permission to perform this action");
  }
})