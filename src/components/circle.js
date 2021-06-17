// import using require
var Shape = require('./shape.js');
var React = require('react');
// declare class
class Circle extends Shape{
    constructor(color) {
        super(color);
        // this.radius = radius;
    }

    calculateArea(){
      let area = 3.14*this.radius*this.radius;
      console.log(area);
      return area;
    }
}
// class Circle extends Shape{

//     constructor(){
//         super(color);
//     }

//     calculateArea(){
//     }
// }
module.exports.Circle = Circle;
// export class using module.exports
