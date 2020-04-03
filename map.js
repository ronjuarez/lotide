
const map = function(array, callback){
 // console.log('array: ', array);
 // console.log('callback: ', callback);

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);


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

let results2 = words.map(words => words[0]);

assertArraysEqual(results1, results2);

let results3 = map(words, word => word + ' spaceOddity');
let results4 = words.map(word => word + ' spaceOddity');

assertArraysEqual(results3, results4)

let results5 = map(words, word => word = 'not a word')
let results6 = words.map(word => word = 'not a word')

assertArraysEqual(results5, results6)