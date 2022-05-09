const PartnerController = require("../../lib/controllers/PartnerController");

describe("PartnerController Tests", () => {

    test("1) Get all Partners", () => {
        const partners = PartnerController.getAllPartners();
        expect(partners.length).toBe(51);
    });

    test("2) Get all partners mails with certification", () => {
        const partners = PartnerController.getAllPartnersEmails();
        expect(partners[0]).toBe("Todd@visualpartnership.xyz");
        expect(partners.length).toBe(29);
    });

    test("3) Get all partners with credits higher than 500 credits", () => {
        const partners = PartnerController.getAllPartnersCredits(500);
        expect(partners.length).toBe(27);
    });

});
