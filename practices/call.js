
Function.prototype.myCall = function() {

  if(typeof this !=='function') {
    throw new TypeError('mycall on function only');
  }

  const [context, ...args] = arguments;

  context = this || window;

  context.fn = this;

  let result;

  if(ars) {
    result = context.fn(...args);
  } else {
    result = context.fn();
  }
  delete context.fn
} 