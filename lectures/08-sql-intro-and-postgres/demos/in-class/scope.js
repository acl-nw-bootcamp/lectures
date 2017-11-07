var globalArray = [];
var globalVar = 7;

function globalFunction(parameter) {
  console.log("'parameter' is only accessible in this function: "+parameter);
  var localVariable = 0;
  let anotherLocalVar = "Let-based Local Scope";
  while (localVariable < 5) {
    var test = localVariable + 1;
    let blockScopedVar = localVariable * 2;
    console.log("Block Scoped Variable: "+blockScopedVar);
    globalArray.push(blockScopedVar);
    localVariable++;
  }
  localVariable = 0;
  while (localVariable < 10) {
    let blockScopedVar = localVariable * 3 / 2;
    localVariable += blockScopedVar;
  }
  // Below line is illegal - can't access the variable.
  // console.log("Last Value of Block Scoped Variable: "+blockScopedVar);
  console.log("Last Value of 'var' Block Scoped Variable: "+test);
}

var SampleConstructor = function() {
  this.a = 0;
  this.b = 10;
  this.add = function() {
    return this.a + this.b;
  }
}

SampleConstructor.multiply = function(a, b) {
  return a * b;
}

function multiply(a, b) {
  // do code here
}
console.log(multiply(2,3));

var sample = SampleConstructor();
sample.a = 5;
console.log("Sample Add: "+sample.add());

console.log("Sample Multiply: " + SampleConstructor.multiply(a, b));
