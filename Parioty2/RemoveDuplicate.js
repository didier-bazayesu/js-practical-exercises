const removeDuplicate = (arr)=>{

    return arr.filter((elem,index)=> {
     if(arr.indexOf(elem) === index)  return elem;
    })
}

console.log(removeDuplicate([1,2,2,2,2,3,4]))