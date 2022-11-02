

function compose(middlewares) {
  return function (ctx) {
    const dispatch = function(i) {
      const fn = middlewares[i];
      try {
        return Promise.resolve(fn(ctx, dispatch.bind(null, i+1)))
      } catch(err) {
        return Promise.reject(err); 
      }
    }
    dispatch(0);
  }
}

class Koa {
  constructor() {
    this.middlewares = [];
  }

  use(mid) {
    this.middlewares.push(mid);
    return this;
  }

  handleRequest(ctx, fn) {
    fn(ctx);
  }

  createContext(req, res) {
    const ctx = {
      req,
      res
    }
    return ctx;
  }

  callback(){
    const fn =compose(this.middlewares)

    return (req, res) => {
      const ctx = this.createContext(req,res);
      return this.handleRequest(ctx,fn)
    }
  }

  listen(...args) {
    const server = httpServer.listen(this.callback)
    server.listen(args);
  }
}

const app = new Koa() 

const mid1 = async (ctx, next) =>{
  console.log(1);
  await next();
  console.log(2);
}

const mid2 = async (ctx, next) =>{
  console.log(3);
  await next();
  console.log(4);
}

const mid3 = (ctx) => {
  console.log(5);
}

app.use(mid1);
app.use(mid2);
app.use(mid3);

app.callback()('req','res')