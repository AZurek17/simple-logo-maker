
class Shape {
    constructor(shapecolor) {
        this.color = shapecolor;
       
    }
    selectedColor(colorSelected) {
        this.color = colorSelected;
    }
   
}
       

class Triangle extends Shape {
    render(){
        return `<polygon points="150 10, 50 145, 250 145" fill="${this.color}"/>`;
    }
}

class Circle extends Shape {
    render(){
        return `<circle cx="145" cy="100" r="80" fill="${this.color}"/>`;
    }
}

class Square extends Shape {
    render(){
        return `<rect x="65" y="50" width="165" height="115" fill="${this.color}"/>`
    }
}


module.exports = {Triangle, Circle, Square};