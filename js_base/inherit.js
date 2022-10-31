

function objectCreate(prototype) {
  const F = function(){}
  F.prototype = prototype;
  return new F();
}

function inheritPrototype(child, parent) {
  child.prototype = objectCreate(parent.prototype);
  child.prototype.constructor = child;
}
