function findLongestSubString(str){
   let strLength = 0;
   let StrLeng =""
   for(let i=0 ; i<str.length ; i++){
      let newSet = new Set();
    for(let j=0 ; j<str.length ; j++){

        if(newSet.has(str[j])){
            break;
        }else{

            newSet.add(str[j])
            if(newSet.size > strLength){
                strLength = newSet.size
                StrLeng = Array.from(newSet).join("")
                
            }
        }

    }
   }
   return StrLeng
}

console.log(findLongestSubString("abcabcbb")) // output: "abc"