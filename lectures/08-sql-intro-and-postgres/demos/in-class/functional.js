var numberArray = [4,9,2,15,7,1];
numberArray.sort(); // [1, 15, 2, 4, 7, 9]

function numericSortMethod(left, right) {
  return left - right;
}

numberArray.sort(numericSortMethod); // [1, 2, 4, 7, 9, 15]

var objectArray = [];
objectArray.push({first: "Mark", last: "Fitzgerald"});
objectArray.push({first: "John", last: "Doe"});
objectArray.push({first: "Jane", last: "Citizen"});

function sortByLast(left, right) {
  if (left.last < right.last) {
    return -1;
  } else if (left.last > right.last) {
    return 1;
  } else {
    return 0;
  }
}

function sortByFirst(left, right) {
  if (left.first < right.first) {
    return -1;
  } else if (left.first > right.first) {
    return 1;
  } else {
    return 0;
  }
}

objectArray.sort(sortByLast);
objectArray.sort(sortByFirst);
