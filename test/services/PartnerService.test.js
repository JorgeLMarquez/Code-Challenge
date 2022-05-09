const PartnerService = require("../../lib/services/PartnerService");
const Reader = require("./../../lib/utils/Reader");

describe("PartnerService Test", () =>{
    const partners = Reader.readJsonFile("./visualpartners.json");

    test("1) Get all partners", () => {
        PartnerService.getAllPartners(partners);
        expect(partners.length).toBe(51);
    });

    test("2) Get all partners mails with certification", () => {
        const partnerEmail = PartnerService.getAllPartnersEmails(partners);
        expect(partnerEmail[0]).toBe("Todd@visualpartnership.xyz");
        expect(partnerEmail.length).toBe(29);
    });

    test("3) Get all partners with credits higher than 500 credits", () => {
        const partnerCredit = PartnerService.getAllPartnersCredits(partners,500);
        expect(partnerCredit.length).toBe(27);
    });

});
