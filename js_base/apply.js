
Function.prototype.myApply(context, args) {

  if(typeof this !== 'function') {
    throw new TypeError('apply must be called on funciton');
  }

  context = context || window;
  context.fn = this;
  let result;
  
  if(args) {
    result = context.fn(...args);
  } else {
    result = context.fn();
  }

  delete context.fn;

  return result;
}