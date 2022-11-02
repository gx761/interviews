
Object.create = function(proto) {
  const fn = function(){}
  fn.prototype = proto;
  return new fn();
}


function inherit(child, parent) {

  const obj = Object.create(parent.prototype);

  child.prototype = obj;

  child.prototype.constructor = child;

}