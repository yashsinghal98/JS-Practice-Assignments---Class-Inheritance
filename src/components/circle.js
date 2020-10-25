// import using require
var Shape = require('./shape.js')
// declare class
class Circle extends Shape{
  constructor()
  {
    super();
    this.color="red";
  }
  calculateArea(){};
};
module.exports=Circle;
// export class using module.exports