// objectFactory(constructor, initProps);
// new Constructor(iniProps)

function objectFactory(c, p) {

  let newObject = null;
  let constructor = Array.prototype.shift.call(arguments) // c
  let result = null;

  if (typeof constructor !== 'function') {
    console.error('type error');
    return;
  }

  newObject = Object.create(constructor.prototype);
  result = constructor.apply(newObject, arguments); // p

  let flag = result && (typeof result === 'object' || typeof result === 'function');

  return flag ? result : newObject;
}

function TestClass(props) {
  this.a = props.a;
}

objectFactory(TestClass, props)