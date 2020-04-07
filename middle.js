let middle = function (inputArray) {
  
  let numOfEle = inputArray.length;
  let evenMiddle = 0;
  let oddMiddle = 0;

  let midOfArray = [];

  if (numOfEle > 2 && numOfEle % 2 === 0) {
    evenMiddle += numOfEle / 2;
  } else if (numOfEle > 2 && numOfEle % 2 !== 0) {
    oddMiddle += Math.floor(numOfEle / 2);
  }

  if (oddMiddle){
    midOfArray.push(inputArray[oddMiddle]);
  }

  if (evenMiddle){
    midOfArray.push(inputArray[evenMiddle - 1]);
    midOfArray.push(inputArray[evenMiddle]);
  }
  return midOfArray
}



module.exports = middle;