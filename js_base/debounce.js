
function debounce(fn, wait, initTrigger) {

  let timer = null;
  let firstTrigger = false;

  return function() {
    const context = this;
    const args = arguments;
    if(timer) {
      clearTimeout(timer)
      timer = null;
    }

    if(initTrigger && firstTrigger ===false) {
      fn.apply(context, args)
    } else {
      timer = setTimeout(() =>{
        fn.apply(context, args)
        firstTrigger = false;
      }, wait)
    }
  }
}