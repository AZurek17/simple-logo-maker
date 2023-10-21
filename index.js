const inquirer = require("inquirer");
const fs = require("fs");
const shapes = require("./lib/shapes");
const { log } = require("console");

const questions = [
    {
        type: "input",
        message: "Enter up to 3 characters for your logo",
        name: "initals"
    },
    {
        type: "input",
        message: "Enter a color for the text",
        name: "initalscolor"
    },
    {
        type: "list",
        message: "Pick a shape",
        name: "shape",
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ],
    },
    {
        type: "input",
        message: "Enter a color for the shape",
        name: "shapecolor"
    },    
];
//create readmeFile
function writeToFile(fileName, data){
    fs.writeFile(fileName, data,(err) =>
    err ? console.log(err) : console.log('Generated logo.svg'))
}

function generateSvg(data) {
    return `
    


    `;
}


//start function
function init() {
 inquirer
 .prompt (questions)
 .then((response) => {
    console.log(response)
    writeToFile("logo.svg", generateSvg(response));
 })
}

//start app
init();
