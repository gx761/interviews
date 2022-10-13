
Function.prototype.myBind = function(oThis) {
  if(typeof this !== 'function') {
    throw new TypeError('invalid type')
  }

  const args = Array.prototype.slice.call(arguments,1);
  const fToBind = this; //called with new

  fNOP = function(){};
  
  fBound = function() {
    return fToBind.apply(this instanceof fNOP ? this : oThis, [...args, arguments])
  }

  fNOP.prototype = this.prototype; // this就是要被绑定的构造函数本身，
  fBound.prototype = new fNOP(); //也可以 fBound.prototype = this.prototype, this instanceof fBound
  return fBound;
}

function foo(x) {
  this.b = 100;
  return this.a;
}

foo.prototype = {c:1}

var func = foo.myBind({a:1}, 20);
// console.log(func())

var za = new func({a:1},20);
console.log(za.c);