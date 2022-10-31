
function getFrequentTag() {
  const tagsObj = [...document.querySelectorAll('*')]
  .map(x => x.tagName)
  .reduce((cur, tag) =>{
    console.log(cur);
    cur[tag] = cur[tag] ? cur[tag]+1:1
    return cur;
  },{});

  const keys = Object.keys(tagsObj)

  keys.sort((a,b) => tagsObj[a] > tagsObj[b] ? -1 : 1)
  console.log(keys);

  return keys[0];

}

getFrequentTag();

