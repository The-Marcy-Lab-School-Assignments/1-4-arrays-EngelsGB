const uppercaseAll = (...words) => {
  for(let word of words) {
    words.splice(words.indexOf(word), 1, word.toUpperCase());
  }
  return words;
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
