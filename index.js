const inquirer = require("inquirer");
const fs = require("fs");
const Triangle = require("./lib/shapes");
const Circle = require("./lib/shapes");
const Square = require("./lib/shapes");


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
            "Triangle",
            "Circle",
            "Square",
        ],
    },
    {
        type: "input",
        message: "Enter a color for the shape",
        name: "shapecolor"
    },    
];
//create svgFile
function writeToFile(fileName, data){
    fs.writeFile(fileName, data,(err) =>
    err ? console.log(err) : console.log('Generated logo.svg'))
}

function generateSvg(data) {
    return `
    <svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

    <rect width="100%" height="100% fill="white"/>

    ${data.shape}

    ${data.initials}
    


    `;
}


//start questions
function init() {
 inquirer
 .prompt (questions)
 .then((response) => {
    console.log(response)
    if(response.initials.length > 3){
        console.log("NO MORE THAN 3 letters");
        init();
    } else {
    writeToFile("logo.svg", generateSvg(response));
    }
 })
}

//start app
init();
