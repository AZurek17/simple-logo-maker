const inquirer = require("inquirer");
const fs = require("fs");
const Shape = require("./lib/shapes");
const Triangle = require("./lib/shapes");
const Circle = require("./lib/shapes");
const Square = require("./lib/shapes");


const questions = [
    {
        type: "input",
        message: "Enter up to 3 characters for your logo",
        name: "initals",
        validate: function (input){
            if (input.length > 3) {
                return "ENTER 3 CHARACTERS MAX";
            }
            return true;
        },
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
    // let shapePick
        if (data.shape === "Triangle") {          
            return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            
            <polygon points="150 10, 50 145, 250 145" fill="${data.shapecolor}"/>
            
            <text x="145" y="125" font-size="60" text-anchor="middle" fill="${data.initalscolor}">${data.initals}</text>
            </svg>
            `
        }
        else if (data.shape === "Circle") {
            return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            
            <circle cx="145" cy="100" r="80" fill="${data.shapecolor}"/>
            
            <text x="145" y="125" font-size="60" text-anchor="middle" fill="${data.initalscolor}">${data.initals}</text>
            </svg>
            `
        }
        else if (data.shape === "Square") {
            return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            
            <rect x="65" y="50" width="165" height="115" fill="${data.shapecolor}"/>
            
            <text x="145" y="125" font-size="60" text-anchor="middle" fill="${data.initalscolor}">${data.initals}</text>
            </svg>
            `
        }
}

// ${data.shape()}

//start questions
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
