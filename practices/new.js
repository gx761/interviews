


function objectFactory() {

  const args = Array.prototype.slice(arguments);
  const constructor = args.unshift()

  if(typeof constructor !== 'function') {
    throw new Error('invalid constructor');
  }

  const prototype = constructor.prototype;

  const obj = Object.create(prototype);

  const result = constructor.apply(obj, args);

  if(result && typeof result === 'object' || typeof result ==='function') {
    return result;
  }

  return obj;
}

// objectFactory(TestClass, props);