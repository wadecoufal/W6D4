const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function (selector) {
  let objectArr;
  if (typeof selector === 'string') {
    objectArr = Array.from(document.querySelectorAll(selector));
  } else if (selector instanceof HTMLElement) {
    objectArr = [selector];
  }
  return new DOMNodeCollection(objectArr);
};
