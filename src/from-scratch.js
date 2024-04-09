const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) arr.unshift(value);
  else arr.push(value);
};

const reverseString = (str) => {
  let strCopy = str.split('');
  strCopy = strCopy.reverse();
  return strCopy.join('');
};

const newArrayFullOf = (value, numOfvalue) => {
  const arr = [];
  for(let i = 0; i < numOfvalue; i++) {
    arr.push(value);
  }
  return arr;
};

const insertIntoMiddle = (arr, value) => {
  arr.splice(Math.floor(arr.length/2), 0, value);
};

const deleteFromMiddle = (arr) => {
  arr.splice(Math.floor(arr.length/2), 1);
};

const isRightIndex = (arr, value, index) => {
  if(arr.indexOf(value) !== -1 && arr.indexOf(value) === index) return true;
  else return false;
};

const roundAllNumsDown = (arr) => {
  const arr2 = [];
  for(let i = 0; i < arr.length; i++) {
    arr2.push(Math.floor(arr[i]));
  }
  return arr2;
};

const getAllYCoordinates = (arrOfCoords) => {
  const YCoords = [];
  for(let i = 0; i < arrOfCoords.length; i++) {
    YCoords.push(arrOfCoords[i][1]);
  }
  return YCoords;
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
