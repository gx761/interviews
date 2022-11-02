

function isComplextData(data) {
  if((typeof data === 'object' && data !==null)||typeof data ==='function') {
    return true;
  }
  return false;
}

function deepClone(target) {
  if(!isComplextData(target)) {
    return target;
  }

  const map = new WeakMap();

  function clone(data) {
    if(['Date', 'RegExp'].indexOf(data.constructor) !==-1) {
      return new data.constructor(data);
    }

    if(typeof data === 'function') {
      return new Function('return ' + data.toString())();
    }

    if(map.get(data)) {
      return map.get(data);
    }

    if(data instanceof Map) {
      let result = new Map();
      map.set(data, result);
      data.forEach((v,k)=>{
        if(!isComplextData(v)) {
          result.set(k,v);
        } else {
          result.set(k,clone(v));
        }
      });
      return result;
    }

    if(data instanceof Set) {
      let result = new Set();
      map.set(data, result);

      data.forEach((v, i)=>{
        if(!isComplextData(v)) {
          result.add(v);
        } else {
          result.add(clone(v));
        }
      });
      return result;
    }

    const proto = Object.getPrototypeOf(data);
    const descriptor = Object.getOwnPropertyDescriptors(data);
    const obj = Object.create(proto, descriptor);

    map.set(data, obj);

    Object.keys(data).forEach(k =>{
      if(!isComplextData(data[k])) {
        obj[k] = data[k]
      } else {
        obj[k] = clone(data[k])
      }
    })
  }
  return clone(target);
}