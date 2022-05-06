const Reader = require("../../lib/utils/Reader");
const PartnerService = require("../../lib/services/PartnerService");

class PartnerController {

  static getAllPartners(){
    const partners = Reader.readJsonFile("visualpartners.json");
    return PartnerService.getAllPartners(partners);
  }

}

module.exports = PartnerController;