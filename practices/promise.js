
const PENDING = 'pending';
const FULFILLED= 'fulfilled';
const REJECTED = 'rejected';
function MyPromise(fn) {
  this.status = PENDING;
  this.value = null;
  this.reason = null;
  this.resolvedCbs = [];
  this.rejectedCbs = [];

  const self = this;

  const resolve = function(val) {
    if(this.status === PENDING) {
      this.resolvedCbs.forEach(cb => cb.call(self, val))
      this.status = FULFILLED;
      this.value = val;
    }
  }

  const reject = function(reason) {
    if(this.status === PENDING) {
      this.rejectedCbs.forEach(cb => cb.call(self,reason))
      this.status = REJECTED;
      this.reason = reason;
    }
  }

  try {
    fn.call(this, resolve, reject)
  } catch(err) {
    reject(err);
  }

}

MyPromise.prototype.then = function(onResolved, onRejected) {
  onResolved = typeof onResolved === 'function' ? onResolved : res => res
  onRejected = typeof onRejected === 'function' ? onRejected : err => {throw err}

  const self = this;

  const promise2 = new MyPromise((resolve, reject) => {
    if(this.status === FULFILLED) {
      setTimeout(()=>{
        try {
          x = onResolved.call(self, self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch(err) {
          reject(err);
        }
      },0)
    }

    if(this.status === REJECTED) {
      //settimeout
      try{
        x = onRejected.call(self, self.reason);
        resolvePromise(promise2, x, resolve, reject);
      } catch(err) {
        reject(err);
      }
    }

    if(this.status === PENDING) {
      //settimeout
      this.resolvedCbs.push(()=>{
        try {
          x = onResolved.call(self, self.value);
          resolvePromise(promise2, x, resolve, reject);
        } catch(err) {
          reject(err);
        }
      });

      this.rejectedCbs.push(()=>{
        try{
          x = onRejected.call(self, self.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch(err) {
          reject(err);
        }
      })
    }
  });

  return promise2;
}

function resolvePromise(promise2, x, resolve, reject) {
  if(promise2 === x) {
    reject(Error('chained promise')); //reject instead of return
  }

  if((typeof x === 'object' && x !== null) || typeof x =='function') {
    let called = false;
    if(typeof x === 'function') {
      const then = x.then;
      try {
        then.call(x, y =>{
          if(called) {return};
          resolvePromise(promise2,y, resolve, reject);
          called = true;
        }, err=>{
          if(called) {return};
          reject(err);
          called = true;
        });
      } catch(err) {
        if(called) {return};
        reject(err)
        called = true;
      }
    } else {
      if(called) {return};
      resolve(x);
      called = true;
    }
  } else{
    reject(x);
  }
}