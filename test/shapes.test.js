const {Triangle,Circle,Square} = require("../lib/shapes.js");

describe('Triangle', () => {
    describe('render' , () => {
        it('should create a SVG file to show a blue triangle', () => {
            const shape = new Triangle();
            shape.selectedColor("blue");
            expect(shape.render()).toEqual(`<polygon points="150 10, 50 145, 250 145" fill="blue"/>`);
        });
    });
});

describe('Circle', () => {
    describe('' , () => {
            it('should create a SVG file to show a blue circle', () => {
            const shape = new Circle();
            shape.selectedColor("blue");
            expect(shape.render()).toEqual(`<circle cx="145" cy="100" r="80" fill="blue"/>`);
        });
    });
});

describe('Square', () => {
    describe('' , () => {
        it('should create a SVG file to show a blue square', () => {
           const shape = new Square();
           shape.selectedColor("blue");
           expect(shape.render()).toEqual(`<rect x="65" y="50" width="165" height="115" fill="blue"/>`);
        });
    });
});