// new Promise.all([promise1, promise2, promise3]).then((results)=>{}, (err) =>{})




Promise.prototype.all = function(promises) {
  return new Promise((resolve, reject) => {
    if(!Array.isArray(promises)) {
        throw new TypeError('auguments must be an array')
      }
      let resolvedCounter = 0;
      const promiseNum = promises.length;
      const resolvedResults = [];
      for (let i=0;i<promiseNum;i++) {
        if(typeof promises.then ==='function') {
          promises[i].then(v =>{
            resolvedCounter++;
            resolvedResults[i] = v;
            if (resolvedCounter === promiseNum) {
              resolve(resolvedResults)
            }
          }, err => {
            return reject(err)
          })
        } else {
          resolvedCounter++;
          resolvedResults[i] = promises[i]
          if(resolvedCounter === promiseNum) {
            resolve(resolvedResults)
          }
        }
      }
  });
}