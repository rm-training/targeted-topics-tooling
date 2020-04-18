import 'core-js/es';

// es6+ stuff
const runMe = (a, b, c, ...args) => {
  console.log('hello from', this, a, b, c, args);

  return {
    word: 'hello',
    args,
  };
};

const numbers = [1, 2, 3, 4, 5, 6];

const { word, args } = runMe(...numbers);

console.log(word, args);

const prom = new Promise((resolve, reject) => {
  resolve(1);
});

const human = {
  id: 1,
  test: function() {
    runMe();
  }
};
