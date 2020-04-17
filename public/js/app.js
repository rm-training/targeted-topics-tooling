import { doMath, sayHello } from './util.js';

console.group('From the app.js module');

console.log(doMath(1,2));
sayHello();

const el = document.getElementById('random-div');
el.style.backgroundColor = 'red';

console.groupEnd();