import userService from "../services/UserService.js";

class UserController {
  constructor() {
    this.userService = userService;
  }
  /**
   * @route GET api/v1/users.
   * @desc get all registered users
   * @access Public.
   */
   getUsers = async (req, res) => {
    await this.userService.getAllUsers(req, res);
  };

  /**
   * @route GET api/v1/user.
   * @desc get a registered user
   * @access Public.
   */
   getUser = async (req, res) => {
    await this.userService.getAUser(req, res);
  };

}

export default UserController;
