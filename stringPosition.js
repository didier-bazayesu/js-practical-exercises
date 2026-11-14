function checkReversedString(str){
    let pos = str.length-1
    let arr = []
for(let i = 0 ; i< str.length ; i++){
     if(str[i] === str[pos]){
        arr.push(true)
        pos--;
     }else{
        arr.push(false)
        pos--;
     }
}
return arr.every((elem) => elem == true);
}


console.log(checkReversedString('racecar'))