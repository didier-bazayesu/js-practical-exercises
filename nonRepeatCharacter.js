function findMissingNumber(nums){
    let arr =[]
  for(let i=Math.min(...nums) ; i<= Math.max(...nums) ; i++){
     arr.push(i)
  }
  return  arr.filter(elem => !nums.includes(elem))
   
   
}
console.log(findMissingNumber([1,2,4,6]))