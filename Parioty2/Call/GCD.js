function gcd(a, b) {
    if (b === 0) return a;      // base case
    return gcd(b, a % b);      // reduce pair
}

console.log(gcd(48, 18));      // 6


//another way

function gcd (a,b){
    while(a !==0){
        let temp = a
        a = b%a
        b = temp
    }
    return a;
}