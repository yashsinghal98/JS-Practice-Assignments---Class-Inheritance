// import using require
import Shape from "./shape";
// declare class
class Circle extends Shape{
  constructor(props)
  {
    super(props);
    this.color="black";
  }
  calculateArea=()=>{};
}
export default Circle;
// export class using module.exports