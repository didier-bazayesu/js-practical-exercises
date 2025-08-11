function createCount(s){

    return function (){
        if(Number.isInteger(s)) {s++; return s}else{ s--; return s;}
    }
}

let countFn = createCount(-3)
console.log(countFn())
console.log(countFn())
console.log(countFn())