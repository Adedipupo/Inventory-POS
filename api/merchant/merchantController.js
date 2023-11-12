import merchantService from "./MerchantService.js";


class MerchantController {
  constructor() {
    this.merchantService = merchantService;
  }
  /**
   * @route GET api/v1/merchant.
   * @desc get all create a merchant
   * @access Public.
   */
   createMerchant = async (req, res) => {
    await this.merchantService.createMerchant(req, res);
  };

}

export default MerchantController;
