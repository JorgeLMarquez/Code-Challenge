const Reader = require("../../lib/utils/Reader");
const PartnerService = require("../../lib/services/PartnerService");

class PartnerController {

    static getAllPartners(){
        const partners = Reader.readJsonFile("visualpartners.json");
        return PartnerService.getAllPartners(partners);
    }

    static getAllPartnersEmails(){
        const partners = Reader.readJsonFile("visualpartners.json");
        return PartnerService.getAllPartnersEmails(partners);
    }

    static getAllPartnersCredits(credits){
        const partners = Reader.readJsonFile("visualpartners.json");
        return PartnerService.getAllPartnersCredits(partners,credits);
    }

}

module.exports = PartnerController;
