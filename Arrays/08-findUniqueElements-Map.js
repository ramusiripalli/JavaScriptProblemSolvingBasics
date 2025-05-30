function findunique(nums){

  const freqMap = new Map();

  for(let num of nums){
    freqMap.set(num,(freqMap.get(num) || 0) + 1);

  }
const result = []
  for(let [key,value] of freqMap){
if(value === 1){
  result.push(key);
}
  }

  return result;

}

console.log(findunique([1,2,2,3,3,3,4,4,5,5,6,7,8,9]));