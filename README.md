# simple-logo-maker ![GitHub License Badge](https://img.shields.io/badge/License-MIT-yellow)

[Link to Walkthrough Video](https://watch.screencastify.com/v/yMwTUdWyrWUHGPscPe35)

 ### Technology Used:
 * node - https://nodejs.org/en/about
 * npm - https://www.npmjs.com/
 * inquirer - https://www.npmjs.com/package/inquirer
 * Jest - https://jestjs.io/
 * OOP - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming
 * SVG Tutorial- https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial

 ## Description

 A Node.js command-line application which prompts a users for input to generate a logo and save it as an SVG file.

 ## Table of Contents
  
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Badges](#badges)
   * [Tests](#tests)
   * [Contributing](#contributing)
   * [Credits](#credits)

 ## Installation

 This application requires jest for testing and inquirer. To install all Dependences, Run nmp install.

 ## Usage

 The application prompts the user four questions. 

 Question 1 - Enter up to 3 initials.
    For a user to notinput more than 3 characters, validate was used.  Below is a snippet of the code used. 
    
  
    validate: function (input){
            if (input.length > 3) {
                return "ENTER 3 CHARACTERS MAX";
            }
            return true;
    }


 Questions 2 - Enter a color or hexadecimal number (Example: #050505) for the inititals.

 Questions 3 - Pick a shape
    List was used to allow the user to have choices. Below is a snippet of the code

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
  
 4. Enter a color or hexadecimal number (Example: #050505) for the shape

 Once the user inputs all the questions.  The applicaitons continues and creates and saves a logo.svg file from the users input. This is achieved by using the fs application builtin to NODE. Below is a snippet of code.

    fs.writeFile(fileName, data,(err) =>
    err ? console.log(err) : console.log('Generated logo.svg'))

 A conditional was added for the shape choices.
  
        if (data.shape === "Triangle") {          
            return `code omitted`
        }
        else if (data.shape === "Circle") {
            return `code omitted`
        }
        else if (data.shape === "Square") {
            return `code omitted`
        }

 ## License

 This project is licensed with MIT license

 Link to License - [Website to MIT License]((https://opensource.org/license/mit))

 ## Badges

 ![GitHub License Badge](https://img.shields.io/badge/License-MIT-yellow)

 ## Tests

  Jest was used to test a couple cases for class shapes.  below is code snippet of one test written.


     describe('Triangle', () => {
        describe('' , () => {
        it('should show a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(<polygon points="150 10, 50 145, 250 145" fill="blue"/>)
        })
    })
    });

 ## Contributing

 Contact me if you interested in contributing:

 Check out my [github](https://github.com/AZurek17) page or send me a [email](mailto:andyzurek@gmail.com)

 ## Credits

 * ChatGPT
 * StudyGroup


 &copy;2023, Written by Andy Zurek
