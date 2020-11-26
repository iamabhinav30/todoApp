5 + null
// ---------------------------------
function add(a, b, c) {
  return a + b + c;
}
add(2, 3)
// ---------------------------------
console.log(1 < 2 < 3);
console.log(3 > 2 > 1);
// ---------------------------------
function a() {
  console.log("2")
}
a();
function a() {
  console.log("4")
}
a();
// ---------------------------------
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 10);
}
// ---------------------------------
var myName = {
  firstName: "virtusa"
};
var identity = myName;
myName.firstName = "bt";
console.log(myName.firstName);
console.log(identity.firstName);
// ---------------------------------
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
// ---------------------------------
for (const i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
// ---------------------------------
const arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
// ---------------------------------
add1(2, 3);
var add1 = (a, b) => a + b;
// ---------------------------------
add(2, 3);
var add = (a, b) => a + b;
// ---------------------------------
add(2, 3);
const add = (a, b) => a + b;
// ---------------------------------
runApp = {
  firstName: "John",
  init: function () {
    this.run()
  },
  run: function () {
    console.log(this.firstName)
  },
  test: () => {
    console.log(this.firstName)
  },
  check: function () {
    this.test()
  },
  hello: function () {
    this.test()
  }
}
runApp.test();
runApp.init();
runApp.check()
runApp.hello()
// ---------------------------------
a();
function a() {
  console.log("x");
}
// ---------------------------------
a();
var a = function () {
  console.log("x");
}
// ---------------------------------
for (const i = 0; i < 5; i++) {
  console.log(i)
}
console.log(i)
