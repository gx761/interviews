// new Promise.race([promise1, promise2, promise3])

Promise.prototype.race = function(promises) {

  if(Object.prototype.toString.call(promises)!== '[object Array]') {
    throw new TypeError('invalid arguments')
  }

  const promiseNum = promises.length

  return new Promise((resolve, reject) => {
    for(let i=0;i<promiseNum;i++) {
      if(typeof promises[i].then === 'function') {
        promises[i].then((res) => {
          return resolve(res)
        }, (err) =>{
          return reject(err)
        })

      } else {
        return resolve(res)
      }
    }
  });
}