var fs = require('fs');
var fileName = "helloFile.txt";
var textToWrite = "Hello World";

fs.appendFile(fileName, textToWrite + "\n", function() {
    console.log("File  " + fileName + " had text \"" + textToWrite + "\" appended");
});
