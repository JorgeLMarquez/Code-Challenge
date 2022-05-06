class PartnerService{

  static getAllPartners(partners){
    return partners;
  }

  static getAllPartnersEmails(partners){
    const certificatePartners = partners.filter( (partner) => partner.haveCertification === true);
    const emailPartners = certificatePartners.map( (partner) => partner.email)
    return emailPartners;
  }



}

module.exports = PartnerService;
