import express from 'express'
import * as authController from '../controllers/auth.js'

const router = express.Router()

// signup route
router.post('/signup', authController.signUp)


router.post('/login', authController.login)

router.post('/forgotPassword', authController.forgotPassword)

router.patch('/resetPassword/:id/:token', authController.passwordReset)

export default router
