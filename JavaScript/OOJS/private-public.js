var foo = (function() {
  var publicAPI = {
    bar: function() {
      publicAPI.baz();
    },
    baz: function() {
      console.log("baz");
    }
  };
  var privateAPI = {
    _bar: function() {
      console.log("private Bar");
    }
  }
  return publicAPI;
})();

foo.bar();

// public and private objects
var foo = (function() {
  var publicAPI = {
    bar: function() {
      publicAPI.baz();
    },
    baz: function() {
      console.log("baz");
    }
  };
  var privateAPI = {
    _bar: function() {
      console.log("private Bar");
    }
  };
  return {
    publicAPI: publicAPI
  };
})();

foo.bar();

//
var foo = (function() {
  var privateAPI = {
    _bar: function() {
      console.log("private Bar");
    }
  };
  var publicAPI = {
    bar: function() {
      publicAPI.baz();
    },
    baz: function() {
      console.log("baz");
	  console.log(privateAPI._bar())
    }
  };

  return {
    publicAPI: publicAPI
  };
})();

foo.publicAPI.bar()
