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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);