// we'll need a build tool like webpack
import Animal from './modules/animal.js';

const cat = new Animal('Felix', 'Meow');

console.log(cat.speak());