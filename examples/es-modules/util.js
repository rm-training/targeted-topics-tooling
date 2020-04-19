// exporting expressions...
export function sayHello() {
  console.log("Hello");
}

export function doMath(x, y) {
  return x + y;
}

// could also export as a list
//export {sayHello, doMath};

const renameMe = function () {
  console.log("I was renamed on export");
};

// exporting values requires a {} block
export { renameMe as renamed };

// import anyName from './util.js'
export default doMath;
