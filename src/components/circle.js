const React = require("react");
const Shape =require("./shape");
module.exports = class Circle extends Shape {
  constructor() {
    super();
  }
  calculateArea() {
    console.log("Area of cirle");
  }
};
