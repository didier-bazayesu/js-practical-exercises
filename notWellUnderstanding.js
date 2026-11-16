function getAllSubArrays(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let current = [];

        for (let j = i; j < nums.length; j++) {
            current.push(nums[j]);
            result.push([...current]);
        }
    }

    let final=result[0].reduce((acc,curr)=> acc +curr,0)
    let maxArray =[]
    for(let i=0 ; i< result.length; i++){
      let currentValue = result[i].reduce((acc, curr)=> acc+curr,0)
      if(currentValue > final){
          final = currentValue;
          maxArray= result[i]
      }
    }
  return maxArray;

}

console.log(getAllSubArrays([-1, -2, 3]));
