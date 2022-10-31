//return Promise.map([],5)

Promise._map = function(queue, limit) {
  const total = queue.length;
  let queueIndex = 0;
  let completeCount = 0;
  let result = new Array(queue.length);

  return new Promise((resolve) => {
    function next(index) {
      if(queue.length ===0) return;
      let curr = queue.pop();
      if(typeof curr === 'function') {
        curr = curr();
      }
  
      Promise.resolve(curr).then(res => {
        result[index] = res;
      }, err=>{
        result[index] = res;
      }).finally(()=>{
        completeCount++;
        if(completeCount === total) {
          return resolve(result);
        }
        next(queueIndex++);
      });
    }

    for(let i=0;i < limit;i++) {
      next(queueIndex++);
    }
  }, (reject)=>{
    console.log('there is no reject')
  })
}

function add(a, b) {
  return Promise.resolve(a + b);
}

Promise._map([add(1,2),add(3,4), add(5,6), add(7,8)],2).then(res => console.log(res));