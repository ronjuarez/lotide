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

module.exports = assertArraysEqual;