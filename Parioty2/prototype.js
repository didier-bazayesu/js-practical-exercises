function Constructor (name,age){
    this.name = name ;
    this.age = age;
}

Constructor.prototype.greet = function(){
    return `hello my love ${this.name} and i'm ${this.age}`
}
Constructor.prototype.Bye = function () {
    return `goodBye my love ${this.name} and i'm ${this.age}`
}

let person1 = new Constructor('didier',20)
// console.log(person1.Bye())
let person2 = new Constructor('dinnah',23)
// console.log(person2.greet())
// console.log(person1)


let object = Object.create({...person1})
  object.file = 'hideen in the corner'
  console.log(object.name)