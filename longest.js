// Find the Longest Substring Without Repeating Characters
//       "abcabcbb" → 3
// Write a function to find the length of the longest substring without repeating characters.

//substrings: a a,b [a,b,c] [a,b,c,a] [a,b,c,a,b] [a,b,c,a,b,c] [a,b,c,a,b,c,b] [a,b,c,a,b,c,b,b]

//[b,c] [b,c,a] [b,c,a,b] [b,c,a,b,c] [b,c,a,b,c,b] [b,c,a,b,c,b,b]


//  1)subtask , generate substrings for a string

function findSubTasks(str,ramu){    //abcde
let str1 ="";

const result = [];
  for(let i=0;i<str.length;i++){

    for(let j=i;j<str.length;j++){
      let str2 = str.slice(i,j+1);
      
      if(!ramu(str2)){
        result.push(str2);
      }
    //  console.log(ramu(str1));
    }
  }
  console.log(result);
}

findSubTasks("abcc", isStringDuplicate);

// 2)subtask, check if the string contains duplicates

function isStringDuplicate(str){

  const freqMap = new Map();

  for(let char of str){
    freqMap.set(char,(freqMap.get(char) || 0 )+ 1);
  }
//console.log(freqMap);
  for(let [key,value] of freqMap){
    if(value>1){
      return true;
    }
  }

  return false;
}

//console.log(isStringDuplicate("aabbcc"));


// 3)subtask , return the  substrings of largest length

12314245678
//startsWith(1)-> 1 12 123 | 1231 12314 123142 1231424 12314245 123142456 1231424567 12314245678  
//startsWith(2)-> 2 23 231 2314 | 23142 231424 2314245 23142456 231424567 2314245678  

12314245678
//1 12 123 1231 
//231 2314 23142 
//3142 31424
//1424
//424
//24 245 2456 24567 245678  