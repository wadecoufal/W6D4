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
  
  removeClass () {
    
  }
  
}

module.exports = DOMNodeCollection;
