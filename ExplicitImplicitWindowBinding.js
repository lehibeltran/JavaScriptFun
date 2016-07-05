//Explicit implicit window bind

// Implicit
var imObj = {
  method: function () {
    console.log("Implicit Binding:", this === imObj); // true
  }
};

imObj.method();

// Explicit
var explicitFunc = function() {
  console.log("Explicit Binding:", this === exObj);
};

var exObj = {
  name: "Dustin",
  age: "29"
};

explicitFunc.call(exObj);

// new Binding
var savedThis = null;

function Constr() {
  savedThis = this;
}

var inst = new Constr();

console.log("New Binding:", savedThis === inst); // true

// Window Binding
function windowFunc() {
  console.log("Window Binding:", this === window); // true
}

windowFunc();