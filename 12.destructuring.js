//from ES6
//assigning object attributes to variables
const person={
    name:'Sara', age:25, gender:'female'
}
let {name,age,gender}=person;
console.log("************** Destructring of object From ES6 ***************");
console.log(name);
console.log(age);
console.log(gender);

//before ES6

let _name=person.name;
let _age=person.age;
let _gender=person.gender;
console.log("************** Destructring of object before ES6 ***************")
console.log(name,age,gender);

//array destructuring  and destrucuring refers to allocating
const arr=['one','two','three','four'];
const [x,y,z]=arr;
console.log("************** Destructring of an Array ***************");
console.log(x,y,z)

// person.name = 'Shrey';
// person.age = 25;
// person.gender = 'male';
// console.log(person);//{name:'Shrey',age:25,gender:'male'}
