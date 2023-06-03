function lonelyInteger(arr) {
  const lonelyInteger = arr.filter(
    (actualNumber) => arr.filter((numInArray) => numInArray === actualNumber).length < 2
  );

  return lonelyInteger[0];
}

const numbers = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyInteger(numbers));
