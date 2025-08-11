function arrayStatistics(arr){
  

    arr = arr.sort((x,y)=> x-y)
    let min = arr[0]
    let max = arr[-1]
    let arrLength = arr.length;
     let sum = arr.reduce((x,y)=> x+y)
    
     return {
        min, max, sum, average:sum/arrLength
     }

}

console.log(arrayStatistics([1,24,4,3,2]))
