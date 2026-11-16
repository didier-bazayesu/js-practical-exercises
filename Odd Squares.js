function findIndicesOfNumber(nums, target){    
    for(let i=0 ; i< nums.length ; i++){
        for(let j=0 ; j<nums.length; j++){
            if(i === j) continue;          
             if(nums[i]+nums[j] === target){
                
                return [i,j]
             } 
        }
    }

    return []
}
console.log(findIndicesOfNumber([5,4,5,5],8 ))