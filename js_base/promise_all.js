MyPromise.prototype.all = function(promises) {
  const results =[];
  const resultsCount = 0;

  if(!Array.isArray(promises)) {
    throw new TypeError('invalid parameters')
  }

  return new Promsie((resolve, reject) =>{
    promises.forEach(p => {
      Promise.resolve(p).then(val =>{
        results.push(p);
        resultsCount++;
        if(resultsCount === promises.length) {
          return resolve(results);
        }
      }, err=>{
        return reject(err)
      })
    })

  });
}