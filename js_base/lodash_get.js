
//  => 'default'

function get(object, path, defaultValue) {
  if(!object) {
    return defaultValue || undefined;
  }

  let newPath;

  if(Array.isArray(path)) {
    newPath = path;
  } else {
    newPath = path.replace(/[\[\]]/g,'.').split('.');   
  }

  return newPath.reduce((cur, k)=>{
    return (cur || {})[k]
  },object) ||defaultValue;
}

const object = { 'a' : [{'b': {'c': 3}}]};

console.log(get(object, ['a', '0', 'b', 'c'] ));
console.log(get(object, 'a[0].b.c'));
console.log(get(object, 'a.b.c', 'default'))