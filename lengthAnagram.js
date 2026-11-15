function sortCharacters(input) {
    return input.split('').sort().join('');
}

function findAnagrams(array1, array2) {
    // implement this
    let newSet1  = new Set(array1.map(elem=>sortCharacters(elem) ))
    
    let newArray = array2.map(elem=>sortCharacters(elem) )
    // return array2.filter(elem=> newSet1.has(elem))
    let length = 0;
    newArray.filter(elem=> newSet1.has(elem)).map(elem=> length += elem.length)
    return length;
    
      
}

let array1 = ["cat", "dog", "tac", "god", "act"];
let array2 = ["tca", "ogd", "atc", "taco"];
let result = findAnagrams(array1, array2);
console.log(result);   // output: 9