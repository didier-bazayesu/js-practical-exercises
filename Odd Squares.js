let oddSquare = (array)=>{

    return  array.filter(el=> el%2 === 1).map(el=> el *el)
}
console.log(oddSquare([1,2,3,5,4,3,2]))