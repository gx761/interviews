// function foo() {}
// foo.apply(boo, 1)

Function.prototype.myCall = function(context) {
  if(typeof this !=='function') {
    throw new TypeError('invalid type')
  }

  let args = [...arguments].splice(1)

  context = context || window;

  context.fn = this; // 在context上下文上调用当前方法
  result = context.fn(...args)
  delete context.fn;
  return reuslt;

}