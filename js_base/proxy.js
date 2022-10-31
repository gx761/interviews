
const obj = {
  a:"1",
  b:"2"
}

const handle = {
  get:(obj, prop) =>{
    console.log('getting prop');
    return obj[prop];
  },
  set:(obj, prop, value) => {
    console.log('setting prop');
    obj[prop] = value;
  }
}

const proxy = new Proxy(obj, handle);