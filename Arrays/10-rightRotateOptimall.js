


const reverseArray = (arr,start,end) =>{
  while(start<end){
    [arr[start], arr[end]] = [arr[end],arr[start]];
    start++;
    end--;
  }
  return arr;
}

const rightRotate = (nums,k)=>{
  const n = nums.length;
  k = k%n;

  if(k === 0 || n<=1) return nums;

  reverseArray(nums,0,n-1);
  reverseArray(nums,0,k-1);
  reverseArray(nums,k,n-1);

  return nums;
}

console.log(rightRotate([1,2,3,4,5],2));