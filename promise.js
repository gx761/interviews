// const x = new Promise((resolve, reject) => {})

const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

function MyPromise(fn) {

  var self = this;

  this.state = PENDING;
  this.value = undefined;
  this.reason = undefined;
  this.resolvedCallbacks = [];
  this.rejectedCallebacks = [];

  function resolve(value) {
      if (self.state === PENDING) {
        self.state = RESOLVED;
        self.value = value;
        self.resolvedCallbacks.forEach(c => c(value))
      }
  }

  function reject(reason) {
      if(self.state = PENDING) {
        self.state = REJECTED;
        self.reason = reason;
        self.rejectedCallebacks.forEach(c => c(value))
      }
  }

  try {
    fn(resolve, reject);
  } catch(e) {
    reject(e)
  }
}
MyPromise.prototype.then = function(onResolved, onRejected) {
  var _this = this;
  onResolved = typeof onResolved === 'function' ? onResolved : function(v) {return v}
  onRejected = typeof onRejected === 'function' ? onRejected : function(v) {throw v}

  // if (this.state === PENDING) {
  //   this.resolvedCallbacks.push(onResolved)
  //   this.rejectedCallebacks.push(onRejected)
  // }
  // if(this.state === RESOLVED) {
  //   onResolved(this.value)
  // }
  // if(this.state === REJECTED) {
  //   onRejected(this.reason)
  // }

  let promise2 = new MyPromise((resolve, reject) => {
    if(_this.state === RESOLVED) {
      setTimeout(() => {
        try {
          let x = onResolved(_this.value)
          resolvePromise(promise2, x, resolve, reject)
        } catch(e) {
          reject(e)
        }
      },0);
    } else if(_this.state = REJECTED) {
      setTimeout(() => {
        try {
          let x = onRejected(_this.reason)
          resolvePromise(promise2, x, resolve, reject)
        } catch(e) {
          reject(e)
        }
      },0);
    } else if(_this.state = PENDING) {
      _this.resolvedCallbacks.push(()=>{
        setTimeout(() => {
          try {
            let x = onResolved(_this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch(e) {
            reject(e)
          }
        },0);
      })
      _this.rejectedCallebacks.push(()=>{
        setTimeout(() => {
          try {
            let x = onRejected(_this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch(e) {
            reject(e)
          }
        },0);
      })
    }
  })
   
  return promise2;
}

function resolvePromise(x, promise2, resolve, reject) {
  //若 x 和 promise2 引用的是同一个对象，则直接报错。
  if (x ===promise2) {
    reject(new TypeError(`Type err, chianed cycle`))
  }
  
  if((typeof x === 'object' && x!==null) || typeof x === 'function') {
    let called = false; //then 的回调函数只能执行一次，要么成功，要么失败(设置标识符 called)
    try {
      const then = x.then
      if(typeof then === 'function') { //若 x 是一个对象或者函数，判断 x 是否存在 then 方法，当存在 then 方法，表明 x 就是一个 promise，此时执行 then 方法
        then.call(x, y=>{  //执行 then 方法时，有一个成功回调和一个失败回调，执行成功走成功回调，并传入成功结果 y；执行失败走失败回调，并传入失败原因 e, 使用 reject 返回
          if(called) return
          called = true
          resolvePromise(y, promise2, resolve, reject) //执行成功返回值 y 可能还是个 promise, 继续递归解析 y 的值
        },e=>{
          if(called) return
          called = true
          reject(e)
        })
      } else {
        resolve(x)
      }
    }catch(e) {
      if(called)  return // 当 x 不存在 then 方法时，表明 x 是普通的对象，直接通过 resolve 返回
      called = true;
      reject(e)
    }

  } else {
    resolve(x) //若 x 是一个普通值，直接通过 resolve 返回
  }

}