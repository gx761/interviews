
function debounce(fn, wait, initTrigger) {
  let timer;
  let init;

  return function() {
    let args = arguments;
    let context = this;

    if(timer) {
      clearTimeout(timer);
      timer = null;
    }

    if(initTrigger && init === false) {
      fn.apply(context, args);
      init = true;
    } else {
      timer = setTimeout(()=>{
        fn.apply(context, args);
        init=false;
      }, wait)
    }
  }
}