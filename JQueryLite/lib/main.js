const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function (selector, ...callbacks) {
  
  document.addEventListener("DOMContentLoaded", function(event) {
    callbacks.forEach( (cb) => {
      cb();
    });
  });
  
  let objectArr;
  if (typeof selector === 'string') {
    objectArr = Array.from(document.querySelectorAll(selector));
  } else if (selector instanceof HTMLElement) {
    objectArr = [selector];
  }
  return new DOMNodeCollection(objectArr);

};

window.callback = function () {
  alert("You cllicked me :D");
};

window.$l.extend = function (...objects) {
  let results = {};
  objects.forEach( (obj) => {
    objKeys = Object.keys(obj);
    objKeys.forEach( (key) => {
      results[key] = obj[key];
    });
  });
  return results;
};