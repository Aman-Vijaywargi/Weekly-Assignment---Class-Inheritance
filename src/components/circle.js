const React = require("react");
const Shape =require("./shape");

class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea() {
//     console.log("Area of cirle");
  }
  render() {
        return(
            <div>              
            <Shape/>
            <Circle/>
            </div>
        )
    }

}

module.exports = Circle;
