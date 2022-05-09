const Reader = require("../../lib/utils/Reader");
require("jest-json-matchers/register");

describe("Test for Reader.js",()=> {

    test("1.¿Can you read me?.",()=>{
    		const partners = Reader.readJsonFile("./visualpartners.json");
    		const reverse = JSON.stringify(partners);
        expect(reverse).toBeJSON();
    });

});
