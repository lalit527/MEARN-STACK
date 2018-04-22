/**
 * ES6
 */
class Shape {
    constructor(id, x, y) {
        this.id = id;
        this.move(x, y);
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Rectangle extends Shape {
    constructor(id, x, y, width, height) {
        super(id, x, y);
        this.width = width;
        this.height = height;
    }

    static defaultRectangle() {
        return new Rectangle("default", 0, 0, 100, 100);
    }

    showDetail() {
        console.log(this.id, this.x, this.y, this.width, this.height);
    }
}

class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
    static defaultCircle() {
        return new Circle("default", 0, 0, 100);
    }
    showDetail() {
        console.log(this.id, this.x, this.y, this.radius);
    }
}

var rectangle = new Rectangle("custom", 10, 20, 100, 150);
rectangle.showDetail();
reactangle.defaultRectangle(); // error
Rectangle.defaultRectangle(); // this will work

/**
 * ES5 
 * */
var Shape = function(id, x, y) {
    this.id = id;
    this.move(x, y);
}

Shape.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
}

var Rectangle = function(id, x, y, width, height) {
    Shape.call(this, id, x, y);
    this.width = width;
    this.height = height;
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.defaultRectangle = function() {
    return new Rectangle("default", 0, 0, 100, 100);
}

var Circle = function(id, x, y, radius) {
    Shape.call(this, id, x, y);
    this.radius = radius;
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
Circle.defaultRectangle = function() {
    return new Circle("default", 0, 0, 100, 100);
}

