import { doMath, sayHello } from './util.js';

console.group('From the app.js module');

console.log(doMath(1,2));
sayHello();

const el = document.getElementById('random-div');
if (el) {
    el.style.backgroundColor = 'red';
} else {
    console.warn('The element did not exist');
}
console.groupEnd();