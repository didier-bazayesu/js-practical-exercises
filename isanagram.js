function isAnagram(str1,str2){
    str1 = str1.map(elem=> elem.split("").sort().join(""))
    str2 = str2.map(elem=> elem.split("").sort().join(""))
    const newSet1 = new Set(str1)
    const newSet2 = new Set(str2)
    let arr =[]
    
    for(let elem of newSet1){
        if(!newSet2.has(elem)){
           newSet1.delete(elem)
        }
    }
    return Array.from(newSet1);
}

console.log(isAnagram(['listen', 'eat','hello'],[ 'listen','eat','coffee']))