


app.use(async (ctx, next) => {

  console.log(1);
  await next();
})


function compose(middlewares) {

  return function(ctx) {
    const dispatch = function(i){
      const mid = middlewares[i];
  
      try {
        return Promise.resolve(mid(ctx, dispatch.bind(null, i+1)))
      } catch(err) {
        return Promise.reject(err);
      }
    }
    dispatch(0)
  }
}