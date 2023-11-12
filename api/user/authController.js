import authService from "./AuthService.js";

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
  };

  /**
   * @route POST api/v1/login.
   * @desc login a registered user endpoint
   * @access Public.
   */
  loginUser = async (req, res) => {
    await this.authService.login(req, res);
  };

  /**
   * @route POST api/v1/forgotPassword.
   * @desc endpoint for users who have forgotten their passwords
   * @access Public.
   */
  forgotPassword = async (req, res) => {
    await this.authService.forgotPassword(req, res)
  }

  /**
   * @route POST api/v1/resettPassword/:id/:token.
   * @desc endpoint to reset/input a new password
   * @access Private.
   */
  resetPassword = async (req, res) => {
    await this.authService.resetPassword(req, res)
  }
}

export default AuthController;
