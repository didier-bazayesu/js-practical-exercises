const objectTransform = (object) =>{
let newObj = {}
for(let key in object){

    newObj[key.toUpperCase()] = object[key]
}
return newObj;

}
const inputObject = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
};


console.log(objectTransform(inputObject))