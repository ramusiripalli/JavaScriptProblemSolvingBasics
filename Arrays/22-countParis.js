// function countPairs(arr){

//   let count = 0;
//   let n = arr.length;
//   let map = new Map();
// for(let i = 0;i<n;i++){
//     map.set(arr[i]-i, map.get(arr[i]-i ||0 )+1)   //1=> 3
// }

// for(let [key, value] of map){
//   count += value * value-1;
// }

// return count;
  

// }

// console.log(countPairs([1,2,3]))
// 1 2 3 4 5 6




function countPairs(arr) {
  let count = 0;
  let n = arr.length;
  let map = new Map();



  for(let i = 0;i<n;i++){
    let key = (arr[i]-i);
    map.set(key, (map.get(key) ||0 )+1)   //1=> 3
}

  for (let [key, value] of map) {
    
      count += (value * (value - 1)) ;
    
  }

  return count;
}

console.log(countPairs([1, 2, 3]));  // Output: 0

