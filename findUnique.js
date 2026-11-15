function findWordAppersOnce(arr){
    let duplicateWord = new Set();
    let uniqueWord = new Set()
 for(let str of arr){
    if(uniqueWord.has(str)){
        duplicateWord.add(str)
    }else {
        uniqueWord.add(str)
    }

 }
    
    for(let str of duplicateWord){
        uniqueWord.delete(str)
    }
    let lastWord = '';
    for(let i=arr.length-1 ; i>= 0 ; i--){
        if(uniqueWord.has(arr[i])){
            lastWord = arr[i]
            break;
        }
    }
    return lastWord;  


    //another way 
    // let uniquewordd=[...uniqueWord].filter(word => !duplicateWord.has(word))
    // let findLastIndex = uniqueWordd.length - 1;
    // return uniqueWordd[findLastIndex]

}

console.log(findWordAppersOnce(["apple", "banana", "orange", "apple", "mango", "banana"]))