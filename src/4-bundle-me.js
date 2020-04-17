// requires: npm install --save jquery jsdom
import $ from "jquery";

// jsdom: virtual dom if you want to run this script via node
// jquery will really only work in the browser environment (bundled)
// boilerplate patching to get jQuery to recognize the simulated DOM
//
// import jsdom from "jsdom";
// import jquery from "jquery";
// const { window } = new jsdom.JSDOM();
// const { document } = new jsdom.JSDOM().window;
// global.document = document;
// const $ = jquery(window);

const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(55);
  }, 1000);
});

prom.then(result => {
  console.log(result);
});

$("<div>")
  .html("HELLO")
  .appendTo($("body"));
