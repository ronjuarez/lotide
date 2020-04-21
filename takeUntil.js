/*const takeUntil = function(array, callback) {
  
  let results = []  
  for(let ele in array){
    if(array[ele])) 
  results.push(callback(ele))
  }
  return results
}
*/
/*
WHICH DATA TYPES AM I WORKING WITH?
I have  a function called takeUntil and I need it to iterate over an array.

I need a call back function. This callback function needs to check if the element 
of the array is true (or lookUp 'truthy').

WHAT DO I WANT TO DO?
If the condition set out by the callback is true then I would like the element
pushed to a new array. 

WHY DO I WANT TO DO IT?
I have a new array need results that will contain the elements that that I have 
pushed.

HOW DO I THINK I SHOULD GET IT DONE?
I need set a function to a const named called takeUntil with a list and items on it 
and the call back functions that are below. I need to pass it my element as an 
argument.
*/

const takeUntil = function (list, callBack){

  const filteredList = [] 
  
  for(let item of list) {
    if (!callBack(item)) {
      filteredList.push(item)
    } else {
      break;
    }
  }
  return filteredList;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

