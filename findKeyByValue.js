const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: [actual] === [expected]');
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};


const findKeyByValue = (inputObject, value) => {
  let result = undefined;

  for (let i in inputObject) {
    let objEle = inputObject[i];
    objEle === value ? result = i : false
  }
return result 
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};



assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);