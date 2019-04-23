// requires: npm install --save jquery
import $ from 'jquery';

const prom = new Promise(((resolve, reject) => {
  setTimeout(() => {
    resolve(55);
  }, 1000);
}));

prom.then((result) => {
  console.log(result);
});

$('<div>').html('HELLO').appendTo($('body'));
