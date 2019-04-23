// es6+ stuff
const runMe = (a, b, c, ...args) => {
  console.log('hello:', a, b, c, args);

  return {
    word: 'hello',
    args,
  };
};

const numbers = [1, 2, 3, 4, 5, 6];

const { word, args } = runMe(...numbers);

console.log(word, args);
