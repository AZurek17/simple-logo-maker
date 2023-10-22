// const Shape = require("./lib/shapes");
const Triangle = require("../lib/shapes");
const Circle = require("../lib/shapes");
const Square = require("../lib/shapes");

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

describe('Triangle', () => {
    describe('' , () => {
        it('should create a SVG file to show a blue triangle', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(<polygon points="150 10, 50 145, 250 145" fill="blue"/>)
        })
    })
});

describe('Circle', () => {
    describe('' , () => {
        it('should create a SVG file to show a blue circle', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(<circle cx="145" cy="100" r="80" fill="blue"/>)
        })
    })
});

describe('Square', () => {
    describe('' , () => {
        it('should create a SVG file to show a blue square', () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual(<rect x="65" y="50" width="165" height="115" fill="blue"/>)
        })
    })
});