class PartnerService{

    static getAllPartners(partners){
        return partners;
    }

    static getAllPartnersEmails(partners){
        const certificatePartners = partners.filter( (partner) => partner.haveCertification === true);
        const emailPartners = certificatePartners.map( (partner) => partner.email);
        return emailPartners;
    }

    static getAllPartnersCredits(partners,credits){
        const creditsPartners = partners.filter( (partner) => partner.credits > credits);
        return creditsPartners.map( (partner) => partner.email);
    }

}

module.exports = PartnerService;
