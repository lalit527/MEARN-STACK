function forEach(list, fn) {
  for (let v of list) {
    fn(v);
  }
}

forEach([1, 2, 3, 4, 5], function each(val) {
  console.log(val);
})

// A higher-order function can also output another function,
function foo() {
  return function inner(msg) {
    return msg.toUpperCase();
  }
}

var f = foo();

f("Hello!") // HELLO!

function foo() {
  return bar(function inner(msg) {
    return msg.toUpperCase();
  });
}

function bar(func) {
  return func("Hello!");
}

foo(); // HELLO


// Closure
function foo(msg) {
  var fn = function inner() {
    return msg.toUpperCase;
  }

  return fn;
}

var helloFn = foo("Hello!");

helloFn();

// Counter
function runningCounter(start) {
  var val = start;

  return function current(increment = 1) {
    val = val + increment;
    return val;
  }
}

var score = runningCounter(0);
score(); // 1
score(); // 2
score(13); // 15


// Formatter
function formatter(formatFn) {
  return function inner(str) {
    return formatFn(str);
  }
}

var lower = formatter(function formatting(v) {
  return v.toLowerCase();
});

var upperFirst = formatter(function formatting(v) {
  return v[0].toUpperCase() + v.substr(1).toLowerCase();
});

lower("WOW");
upperFirst("hello");

// Changing this with FP

var Auth = {
  authorize() {
    var credentials = `${this.username}:${this.password}`;
    this.send(credentials, resp => {
      if(resp.error) this.displayError(resp.error);
      else this.displaySuccess();
    })
  },
  send(credentials, fn) {
    // ..
  }
}

var Login = Object.assign(Object.create(Auth), {
  doLogin(user, pw) {
    this.username = user;
    this.password = pw;
    this.authorize();
  },
  displayError(err) {

  },
  displaySuccess() {

  }
})

Login.doLogin("Jon", "123");

function authorize(ctx) {
  var credentials = `${ctx.username}:${ctx.password}`;
  Auth.send(credentials, function onResp(resp) {
    if(resp.error) ctx.displayError(resp.error);
    else ctx.displaySuccess();
  })
}

function doLogin(user, pw) {
  Auth.authorize({
    username: user,
    password: pw
  })
}
