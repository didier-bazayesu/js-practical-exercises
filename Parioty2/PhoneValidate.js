function validateNumber(num) {
    let test1 = num.match(/[0-9]{3}-[0-9]{3}-[0-4]$/g)
    let test2 = num.match(/[0-9]{3}\s[0-9]{3}\s[0-4]$/g)
    let test3 = num.match(/\d{10}/g)
    let length1 = num.match(/\d/g)
   

    if (length1.length == 10) {
        if (test1) {
            return true
        } else if (test2) {
            return true;
        } else if (test3) {
            return true;
        } else {
            return false;
        }

    } else {
        return false;
    }


    //other cleaner and easier way

    let pattern = /^(\d{10}|\d{3}-\d{3}-\d{4}|\d{3}\s\d{3}\s\d{4})$/g

     return pattern.test(num)
   



}

console.log(validateNumber('126 464 464633'))