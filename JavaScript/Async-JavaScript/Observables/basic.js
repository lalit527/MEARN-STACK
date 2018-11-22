// Events TO Observables

var mouseMoves = Observables.fromEvent(element, "mousemove");

// Event Subscription

// subscribe
var handler = (e) => console.log(e);
document.addEventListener("mousemove", handler);

// unsubscribe
document.removeEventListener("mousemove", handler);


// Observables.forEach

// subscribe
var subscription = 
  mouseMoves.forEach(console.log);

// unsubscribe
subscription.dispose();

// Expanded Observable.forEach

// subscribe
var subscription = 
  mouseMoves.forEach(
    event => console.log(event),
    error => console.log(error),
    () => console.log("done")
  );

// unsubscribe
subscription.dispose();

// 

// subscribe
var subscription = 
  mouseMoves.forEach({ // Takes a Observer
    onNext: event => console.log(event),
    onError: error => console.log(error),
    onCompleted: () => console.log("done")
  });
