// using babel 7 & babel core-3
import 'core-js/es';

const prom = new Promise(((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 1000);
}));

prom.then((result) => {
  console.log(result);
});
