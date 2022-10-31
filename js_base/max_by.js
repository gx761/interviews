

const maxBy = (list, keyBy) => {
  return list.reduce((prev,curr)=>{
    if(keyBy(prev) > keyBy(curr)) {
      return x;
    } else {
      return y;
    }
  })
}

const mutiMaxBy = (list, keyBy) => {

  return list.slice(1).reduce((prev,curr) =>{
    if(keyBy(curr) > keyBy(prev[0])) {
      return [curr]
    }

    if(keyBy(curr) === keyBy(prev[0])){
      return [...prev, curr]
    }
    return prev;
  }, [list[0]])
}