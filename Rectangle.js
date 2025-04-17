/**
 * Rectangle Class with Area and Perimeter
 * Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
 * Include two methods to calculate rectangle area and perimeter. 
 * Create an instance of the 'Rectangle' class and calculate its area and perimeter.
 */


class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return (this.height * 2) + (this.width * 2);
  }
}

const rectangleOne = new Rectangle(50, 100);
const rectangleTwo = new Rectangle(12, 10);
console.log(`rectangleOne Area: ${rectangleOne.area()}`)
console.log(`rectangleTwo Area: ${rectangleTwo.area()}`);
console.log(`rectangleOne perimeter: ${rectangleOne.perimeter()}`);
console.log(`rectangleTwo perimeter: ${rectangleTwo.perimeter()}`);

