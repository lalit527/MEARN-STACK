Object.create = function(obj) {
  return {
    __proto__: obj
  }
}

// Make Object create behave as new

Object.create = function(obj) {
  function Fun() {}
  Fun.prototype = obj;
  return new Fun();
}
