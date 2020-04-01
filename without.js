let without = function (source, itemsToRemove) {

  let itemsRemovedArray = [];

    for (let num of source) {
      if (!itemsToRemove.includes(num)) {
        itemsRemovedArray.push(num)
    }
  }
    return itemsRemovedArray;
} 

console.log (without([1, 2, 3], [1]));
console.log (without(["1", "2", "3"], [1, 2, "3"]));

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

assertArraysEqual (without([1, 2, 3], [1]), [2, 3])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without(words, ["lighthouse"]), ["hello", "world", "lighthouse"]);