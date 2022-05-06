const PartnerController = require("./controllers/PartnerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "Code Challenge Api welcome!"});
});

app.get("/v1/partners", (request, response) => {
    const partners = PartnerController.getAllPartners();
    response.json(partners);
});

app.get("/v1/partners/certified/emails", (request, response) => {
    const partnersEmails = PartnerController.getAllPartnersEmails();
    res.json(partnersEmails);
});

app.get("/v1/partners/credits/:credits", (request, response) => {
    const credits = request.params.credits;
    const partnerEmails = PartnerController.getAllPartnersCredits(credits);
    response.json({Credits: credits, Email: partnerEmails});
});

app.listen(port, () => {
    console.log(`Code Challenge API in localhost:${port}`);
});
