function throttle(fn, delay) {
  let curTime = Date.now();

  return function() {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if(now - curTime > delay) {
      curTime = now;
      fn.apply(context, args);
    }

  }
}