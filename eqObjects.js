// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!


let eqArrays = function (arrayOne, arrayTwo) {

  let result = true;
  
  if (arrayOne.length === arrayTwo.length) {
    for (let i = 0; i < arrayOne.length; i++){
      if (arrayOne[i] !== arrayTwo[i]) {
        result = false;
        break;
      }
    }
  } else {
    return result = false;
  }
  return result;
}



const eqObjects = function(object1, object2) {
  let result = true;
  let obj1Arr = Object.keys(object1);
  let obj2Arr = Object.keys(object2);

  if (obj1Arr.length === obj2Arr.length) {
    for (let prop in object1){
      if (Array.isArray(object1[prop])) {
        result = eqArrays(object1[prop], object2[prop])
        break;
      } else {
        if (object1[prop] !== object2[prop]) {
          result = false;
          break;
        }
      }
    };
  } else {
    return result = false;
  }
  return result;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: [actual] === [expected]');
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }
};



const abc = { a: "1", b: "2", c: "3" };
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


assertEqual(eqObjects(cd, dc), true); // => true

assertEqual(eqObjects(cd, cd2), false);

assertEqual(eqObjects(ab, ba), true); // => true
assertEqual(eqObjects(ab, abc), false); // => false