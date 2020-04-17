import { data } from './user.js';

console.log('(second) From util.js');

data.id = 12; // set a property on an "static" import

console.log('(third) From user.js', data);
