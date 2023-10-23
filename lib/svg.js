class SVG {
    constructor (initalcolor, initals, shape){
        this.shape=shape
        this.initalcolor=initalcolor
        this.initals=initals
    }

    render(){
        return `<svg version="1.1"
            width="300" height="200"
            xmlns="http://www.w3.org/2000/svg">
            
           ${this.shape.render()}
            
            <text x="145" y="125" font-size="60" text-anchor="middle" fill="${this.initalcolor}">${this.initals}</text>
            </svg>
            `
    }


}

module.exports=SVG