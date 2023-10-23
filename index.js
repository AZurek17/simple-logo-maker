const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle,Circle,Square} = require("./lib/shapes.js");
const SVG = require("./lib/svg.js");

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
        message: "Enter a color or hexadecimal number (Example: #050505) for the text",
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
        message: "Enter a color or hexadecimal number (Example: #050505) for the shape",
        name: "shapecolor"
    },    
];

//create svgFile
function writeToFile(fileName, data){
    fs.writeFile(fileName, data,(err) =>
    err ? console.log(err) : console.log('Generated logo.svg'))
}

//conditional based on list choices 
function generateSvg(data) {
        let newShape = "";

        if (data.shape === "Triangle") {    
        newShape = new Triangle(data.shapecolor)
        }
        else if (data.shape === "Circle") {
        newShape = new Circle(data.shapecolor)  
        }
        else if (data.shape === "Square") {
        newShape = new Square(data.shapecolor)
        }

        const newSvg = new SVG(data.initalscolor,data.initals, newShape)
        return newSvg.render()
}

//start user questions
function init() {
 inquirer
 .prompt (questions)
 .then((response) => {
    console.log(response)
    
 writeToFile("./examples/" + response.shape + "-logo.svg", generateSvg(response));
 })
}

//start app
init();
