const { circle } = require("cli-spinners");

class Shape {
    constructor() {
        this.color = "";
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon "150 10, 50 145, 250 145" fill=${this.color}/>`;
    }
}

class Circle extends Shape {
    render(){
        return `<circle cx="" cy="" r="20" fill=${this.color}/>`;
    }
}

class Square extends Shape {
    render(){
        return `<rec x="" y="" width="150" height="150" fill=${this.color}/>`
    }
}

module.exports = Triangle;
module.exports = Square;
module.exports = Circle;