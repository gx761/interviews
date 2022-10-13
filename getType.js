
function getType(value) {
  if (value ===null) {
    return value + ''
  }

  if(typeof value === 'object') {
    const full = Object.prototype.toString.call(value);
    const typeTemp = full.split(' ')[1].split('');
    typeTemp.pop();
    const type = typeTemp.join('');
    return type
  } else {
    return typeof vlaue
  }
}

console.log(getType(1));
console.log(getType(null))
console.log(getType({}))