function findIndices(nums, target){
     let arr = []
  for(let i =0 ; i< nums.length ; i++){
     let start = nums[i];
        for (let j=0 ; j< nums.length;j++){ 
            if(i  !== j){
                if(nums[j]+start === target ){
                    return [j,i]
                }
               

            }   
        }
   }
    
  
}

console.log(findIndices(nums = [3, 3, 4, 8], 6)); 