const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: [actual] === [expected]');
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};

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
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

/*

function that takes two arrays as arguments

For loop through both arrays to see if each element is equal to the elements in the same index as the array its being compared
to.

Return true if each item in the array one is equal to the items in array two in value, type and index.
*/