import { data } from './user.js'; // user.js first
import './util.js'; // then util.js

console.log('(last) From index.js', data); // what will be in data.id?

// async stuff
setTimeout(() => console.log(data), 1500); //
/**/