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

app.get("/v1/partners/certified/emails", (req, res) => {
    const partnersEmails = PartnerController.getAllPartnersEmails();
    res.json(partnersEmails);
});

app.listen(port, () => {
    console.log(`Code Challenge API in localhost:${port}`);
});
