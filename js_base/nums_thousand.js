

function transNum(num) {

  if(num.length <=3) {
    return num;
  }

  const remain = num.length % 3;

  if(remain >0) {
    return num.slice(0, remain) + ',' + num.slice(remain).match(/\d{3}/g).join(',');
  } else {
    return num.match(/\d{3}/g).join(',');
  }
}


console.log(transNum('99'));