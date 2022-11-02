


function Event() {
  this.listeners = {};
}

Event.prototype.on = function(e, cb) {
  if(this.listeners[e]) {
    this.listeners[e].push(cb);
  } else {
    this.listeners[e]=[cb]
  }
  return this;
}

Event.prototype.off = function(e, cb) {
  if(this.listeners[e]) {
    this.listeners[e] = this.listeners[e].filter(fn=>fn!==cb);
  }
  return this;
}

Event.prototype.once= function(e, cb) {
  const self = this;
  const proxy = function() {
    cb();
    self.off(e, proxy);
  }

  if(this.listeners[e]) {
    this.listeners[e].push(proxy);
  } else {
    this.listeners[e]=[proxy]
  }
}

Event.prototype.emit = function(event, args) {
  const cbs = this.listeners[event]
  if(!cbs) {
    return;
  }
  cbs.forEach(cb=>cb(args));
}

const e = new Event();
e.on("click", (x) => console.log(x.id));
e.once("click", (x) => console.log(123));
// //=> 3
e.emit("click", { id: 3 });
// //=> 4
e.emit("click", { id: 4 });