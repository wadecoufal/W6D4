class DOMNodeCollection {
  
  constructor (htmlArr) {
    this.htmlArr = htmlArr;
  }
  
  html (string = "") {
    this.htmlArr.forEach( (el) => {
      el.innerHTML = string;
    });
  return this.htmlArr[0].innerHTML;
  }
  
  empty () {
    this.html();
  }
  
  append (elements) { // [e1 e2 ]
    if (elements instanceof DOMNodeCollection) {
      elements.forEach( (el) => {
        this.htmlArr.forEach( (el2) => {
          el2.innerHTML += el.outerHTML;
        });
      });
    } else if (elements instanceof HTMLElement) {
      this.htmlArr.forEach( (el) => {
        el.innerHTML += elements.outerHTML;
      });
    } else {
      this.htmlArr.forEach( (el) => {
        el.innerHTML += elements;
      });
    }
  }
  
  attr () {
    const output = [];
    this.htmlArr.forEach( (el) => {
      output.push(el.attributes);
    });
    return output;
  }
  
  addClass (className) {
    //pass in string
    this.htmlArr.forEach( (el) => {
      if (el.className) el.className += ` ${className}`;
      else el.className = `${className}`;
    });
  }
  
  removeClass (className) {
    this.htmlArr.forEach( (el) => {
      el.className = el.className.replace(`${className}`,"");
    });
    
  }
  
  children () {
    let result = [];
    this.htmlArr.forEach( (el) => {
      const children = Array.from(el.children);
      result = result.concat(children);
    });
    return new DOMNodeCollection(result);
  }
  
  parent () {
    let result = [];
    this.htmlArr.forEach( (el) => {
      const parent = [el.parentNode];
      if (!result.includes(parent[0])) {
        result = result.concat(parent);
      }
    });
    return new DOMNodeCollection(result);  
  }
  
  find (selector) {
    let result = [];
    
    this.htmlArr.forEach( (el) => {
      result = result.concat(Array.from(el.querySelectorAll(selector)));
    });
    return result;
  }
  
  remove () {
    this.htmlArr.forEach( (el) => {
      el.remove();
    });
    this.htmlArr = [];
  }
  
  on (e,callback) {
    this.htmlArr.forEach( (el) => {
      el.addEventListener(e,callback);
      el.callback = callback;
    });
  }
  
  off (e) {
    this.htmlArr.forEach( (el) => {
      el.removeEventListener(e, el.callback);
      delete el.callback;
    });
  }
  
}
module.exports = DOMNodeCollection;
