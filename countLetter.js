const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed: [actual] === [expected]');
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

  }

};

const countLetters = function(string) {
    
  let totalLetters = {}
    
  for (let letter of string){
      
    if (letter !== ' '){
      if (string.includes(letter)) {
        if (totalLetters[letter]) {
        totalLetters[letter] += 1;
        } else {
        totalLetters[letter] = 1;
        }
      }  
    }
  }
  return totalLetters
}


let result1 = countLetters('LHL ');
assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);
assertEqual(result1[" "], undefined);
