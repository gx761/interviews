
function isComplextData(data) {
  return (typeof data === 'object' && data!==null) || typeof data === 'function'
}

function deepClone(data) {
  const map = new WeakMap();

  if(!isComplextData(data)) {
    return data;
  }

  function clone(data) {
    if([Date, RegExp].indexOf(data.constructor) !==-1) {
      return new data.constructor(data)
    }

    if(typeof data === 'function') {
      return new Function('return ' + data.toString())()
    }

    const exist = map.get(data);

    if(exist) {
      return exist;
    }

    // map
    if(data instanceof Map) {
      const result = new Map();
      map.set(data, result);

      data.forEach((v, i) =>{
        if(!isComplextData(v)) {
          result.set(i, v);
        } else {
          result.set(i, clone(v));
        }
      });
      return result;
    }

    //set
    if(data instanceof Set) {
      const result = new Set();
      map.set(data,result);

      data.forEach((v,i)=>{
        if(!isComplextData(v)) {
          result.add(v);
        } else {
          result.add(clone(v))
        }
      })
      return result;
    }

    //obejct and array

    const keys = Object.keys(data);
    const protoDescriptor = Object.getOwnPropertyDescriptors(data);

    const result = Object.create(Object.getProtoTypeOf(data), protoDescriptor);

    map.set(data, result);
    
    keys.forEach(k => {
      if(!isComplextData(result[k])) {
        result[k] = data[k]
      } else {
        result[k] = clone(data[k])
      }
    });

    return result;
  }

  return clone(data);
}