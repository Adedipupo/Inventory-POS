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

}

export default UserController;
