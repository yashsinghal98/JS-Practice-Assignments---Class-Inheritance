// import using require
var Shape = require("./shape");
// declare class
class Circle extends Shape{
   constructor(){super();this.calculateArea=this.calculateArea.bind(this);}
  calculateArea(){};
};
module.exports.Circle=Circle;
// export class using module.exports