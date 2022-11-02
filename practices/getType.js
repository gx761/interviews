

function getType(value) {
  if(value === null) {
    return ''+value;
  }

  const full = Object.prototype.toString.call(value);  // [object Array]

  const result = full.split(' ')[1].slice(0, -1).toLowerCase();

  return result;
}
console.log(getType(1));
console.log(getType('sfsf'));