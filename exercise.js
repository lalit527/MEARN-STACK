var length = 10;
function fn() {
	console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    function fn() {
        console.log(this.length);
    }
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);

var obj = {
    bar: "bar",
    foo() {
        console.log(1,this);
        bar();
        function bar() {
            console.log(2,this);
                bat();
                function bat() {
                    console.log(3,this);
                        bazz();
                        function bazz() {
                            console.log(4,this);
                        }
                }
        }
    }
}

var obj2 = {
    bar: "bar",
    foo() {
        console.log(1,this);
        
        var bar = () => {
            console.log(2,this);
                
                var bat = () => {
                    console.log(3,this);
                        
                        var bazz = () => {
                            console.log(4,this);
                        }
                        bazz();
                }
                bat();
        }
        bar();
    }
}