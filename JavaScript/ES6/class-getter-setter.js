class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    set width(width) {
        this._width = width;
    }

    get width() {
        return this._width;
    }

    set height(height) {
        this._height = height;
    }

    get height() {
        return this._height;
    }

    get area() {
        return this._height * this._width;
    }
}

var rec = new Rectangle(100, 200);
r.area; 20000

/**
 * ES5
 */
var Rectangle = function(width, height) {
    this._width = width;
    this._height = height;
}

Rectangle.prototype = {
    set width(width) {
        this._width = width;
    },
    get width() {
        return this._width;
    },
    set height(height) {
        this._height = height;
    },
    get height() {
        return this._height;
    },
    get area() {
        return this._height * this._width;
    }
}