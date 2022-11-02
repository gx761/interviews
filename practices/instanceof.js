
function instanceOf(obj, cla) {

  let proto = Object.getPrototypeOf(obj);
  const prototype = cla.prototype;

  while(true) {
    if(proto === prototype) {
      return true;
    }

    proto = Object.getPrototypeOf(proto) 
    if(proto === null) {
      return false;
    }
  }

}