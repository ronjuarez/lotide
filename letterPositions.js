
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




const letterPositions = function(string) {
// CREATE AN OBJECT TO HOLD THE CHARACTER OF THE PROPERTY    
  const posOfChar = {};

    for (let pos in string) {
      const letter = string[pos];
      
      if (letter !== ' ') { 
        if (posOfChar[letter]) {
          posOfChar[letter].push(pos);
        } else {
          posOfChar[letter] = [pos];
        }
      }
    }
  return posOfChar;
};

console.log (letterPositions('hello jello'));

assertArraysEqual(letterPositions("hello jello").e, ['1','7']);
assertArraysEqual(letterPositions("hello jello").l, ['2','3','8','9']);
assertArraysEqual(letterPositions("hello jello").h, ['0']);