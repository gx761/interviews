
function get(object, path, defaultValue) {
  if(!object) {
    return defaultValue || undefined;
  }


  if(!Array.isArray(path)) {
    path = path.replace(/[\[\]]/g, '.').split('.').filter(v =>v!=='');
  }
  console.log(path);

  const result = path.reduce((prev, curr) => {
    return (prev || {})[curr]
  }, object)

  return result || defaultValue;
}

const object = { 'a' : [{'b': {'c': 3}}]};

console.log(get(object, ['a', '0', 'b', 'c'] ));
console.log(get(object, 'a[0].b.c'));
console.log(get(object, 'a.b.c', 'default'))