


let eqArrays = function (arrayOne, arrayTwo) {

  let result = true;
  
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++){
      if (arrayOne[i] !== arrayTwo[i]) {
        result = false;
        break;
      }
    }
  }
  return result;
}
let assertArraysEqual = function (arrayOne, arrayTwo) {

  let result = true;
  
  if (arrayOne.length === arrayTwo.length) {
    for (let i in arrayOne){
      if (arrayOne[i] !== arrayTwo[i]) {
        result = false;
        break;
      }
    }
  } else {
    result = false;
  }
  
  if (result){
    console.log('✅✅✅ Assertion Passed: [arrayOne] === [arrayTwo]');
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayOne} !== ${arrayTwo}`)
  }
}
let middle = function (inputArray) {
  
  let numOfEle = inputArray.length;
  let evenMiddle = 0;
  let oddMiddle = 0;

  let midOfArray = [];

  if (numOfEle > 2 && numOfEle % 2 === 0) {
    evenMiddle += numOfEle / 2;
  } else if (numOfEle > 2 && numOfEle % 2 !== 0) {
    oddMiddle += Math.floor(numOfEle / 2);
  }

  if (oddMiddle){
    midOfArray.push(inputArray[oddMiddle]);
  }

  if (evenMiddle){
    midOfArray.push(inputArray[evenMiddle - 1]);
    midOfArray.push(inputArray[evenMiddle]);
  }
  return midOfArray
}

console.log (eqArrays (middle([0, 5, 10, 9, 8, 7, 10]),[9]));
console.log (assertArraysEqual (middle([0, 5, 10, 9, 8, 7, 10]), [9]));