
function findUnique(nums){

const freq = {};
for(let num of nums){
freq[num] = (freq[num] || 0)+ 1;
}

let result = [];
for(let num in freq){
  if(freq[num] === 1){
    result.push(Number(num));
  }
}

return result;

}

findUnique([1,2,2,3,4,4,5]);
