//Using IIFE (immediately invoking function express as a way to create abstraction)
const personDOM = (function(){
  //Kind of Private within this function, cannot be accessible

  const dom = new Object();

  dom.getInteger = function(name) {
    const htmlElement = document.getElementById(name);
    let returnValue = Number(0);  //default is zero?
    if (!isNaN(htmlElement.value)) {
      returnValue = Number(htmlElement.value);
      return returnValue;
    }
    throw 'not a number';
  }
  
  dom.getString = (name) => {
    const htmlElement = document.getElementById(name);
    let returnValue = '';  //default is empty Name?
    if (typeof(htmlElement.value) == 'string')
      returnValue = String(htmlElement.value);
    return returnValue;
  }
  
  return dom;
})();


