let csvToJson = require('convert-csv-to-json');
 
let fileInputName = 'vizz1.csv'; 
let fileOutputName = 'jsontest.json';
 
csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
