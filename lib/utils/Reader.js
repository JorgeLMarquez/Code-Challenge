const fs = require("fs");

class Reader{
    static readJsonFile(path){
	 		const rawdata = fs.readFileSync("visualpartners.json");
	 		return JSON.parse(rawdata);
    }
}

module.exports = Reader;
