function addValues(value1, value2) {
  return value1 + value2;
}

function normalIncrement(value) {
  return value + 1;
}

var arrowIncrement = value => value + 1;

var arrowAdd = (value1, value2) => value1 + value2;

var arrowRandom = () => Math.random();

var arrowBuildObject = (name, course) => {
  let newObject = { "name": name, "course": course};
  return newObject;
}
