// import using require
import Shape from "./shape";
// declare class
class Circle extends Shape{
  constructor()
  {
    super();
    this.color="red";
  }
  calculateArea(){};
};
export default Circle;
// export class using module.exports