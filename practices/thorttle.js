

function throttle(fn, delay) {
  let timer = Date.now();

  return function() {
    let args = arguments;
    let context = this;

    let now = Date.now();

    if(now-timer >=delay) {
      fn.apply(context, args);
      timer = now;
    }
  }
}