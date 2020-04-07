
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


module.exports = eqArrays;