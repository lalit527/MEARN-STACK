var Shape = function(id, x, y) {
    this.id = id;
    this.move(x, y);
}

Shape.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
}

Shape.prototype.details = function() {
    console.log(this.id);
    console.log(this.x);
    console.log(this.y);
    console.log(this.width);
    console.log(this.height);
}

var Rectangle = function(id, x, y, width, height) {
    Shape.call(this, id, x, y);
    this.width = width;
    this.height = height;
} 

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
var rec = new Rectangle('Reactangle', 10, 20);



// var Circle = function(id, x, y, radius) {
//     Shape(id, x, y);
//     this.radius = radius;
// } 