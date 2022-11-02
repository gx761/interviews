// 判断构造函数的prototype是否存在与实例的原型链上

function instanceOf(left, right) { // 可以在left 的 proto链上找到right 的prototype

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