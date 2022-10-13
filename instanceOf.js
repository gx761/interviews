// 判断构造函数的prototype是否存在与实例的原型链上

function instanceOf(left, right) {

  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;

  while(true) {
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto)
    if (!proto) {
      return false;
    }
  }

}