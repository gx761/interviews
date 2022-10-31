
class Lazyman {
  constructor(n) {
    this.query = [];
    this.next.bind(this);
    this.sleep.bind(this);
    this.eat.bind(this);
    this.sleepFirst.bind(this);
    this.query.push(() =>{console.log(`Hello, this is ${n}`); this.next()})
    setTimeout(()=>this.next(), 0);
  }

  next(){
    if(this.query.length) {
      const task = this.query.pop();
      task.call(this);
    }
  }

  sleep(period) {
    this.query.unshift(()=>{
      setTimeout(()=>{console.log(`等待${period}秒`);this.next()}, period * 1000);
    })
    return this;
  }

  eat(food) {
    this.query.unshift(()=>{
      console.log(`eat ${food}`)
      this.next();
    });
  }

  sleepFirst(period) {
    this.query.push(()=>{
      setTimeout(()=>{console.log(`先等待${period}秒`); this.next()}, period * 1000);
    })
  }
}

new Lazyman("royguo").sleep(3).eat("dog");