/**
 * Shape, Circle, and Triangle Classes with Area Calculation
 * Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.
 * Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method.
 * Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.
 * 
 */

class Shape {
  constructor (shape) {
    this.shape = shape;
  }

  area() {
    console.log(`Should never see this message`);
  }
}
class Circle extends Shape{
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  area() {
    console.log(`Circle Area ${(this.radius ** 2) * Math.PI}`);
  }
}

class Triangle extends Shape{
  constructor(height, width) {
    super('Triangle');
    this.height = height;
    this.width = width;
  }

  area() {
    console.log(`Triangle Area ${Math.floor((this.width * this.height) / 2)}`);
  }
}

const triangle = new Triangle(10, 5);
const circle = new Circle(7);
triangle.area()
circle.area();
