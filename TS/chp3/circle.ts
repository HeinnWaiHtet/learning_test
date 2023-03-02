class Circle {
  #privateRadius: number = 0;
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }

  set setRadius(newRadius: number) {
    console.log("setter work");
    this.radius = newRadius;
  }

  get area() {
    console.log("getter work");
    return this.radius * Math.PI * this.radius;
  }
}

let circle: Circle = new Circle(10);
console.log("Circle area : ", circle.area);
circle.setRadius = 20;
console.log("Circle area : ", circle.area);

circle["radius"] = 5; // bug of private in TS
console.log("Circle area : ", circle.area);
