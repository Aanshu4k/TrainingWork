const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 40 },
    { name: 'Robert', age: 32 },
    { name: 'John', age: 42 },
    { name: 'Mark', age: 21 },
    { name: 'Peter', age: 33 },
    { name: 'Sam', age: 29 },
]
//filter data from the array
const olderThan30=people.filter(person=>person.age>30);
console.log("People Older than 30 are : ",olderThan30);

//Mapping names to uppercase using arror function
const upperCaseNames=people.map(person=>person.name.toUpperCase());
console.log(`Names in UpperCase : ${upperCaseNames}`)

//calculate the average using arrow function and reduce
const totalAge=people.reduce((sum,person)=>sum+person.age,0);//sum=0 initial value
const avgAge=totalAge/people.length;
console.log('Average Age = ',avgAge);

//forEach loop 
console.log("People and their ages: ")
people.forEach(person=>{
    console.log(`${person.name} is ${person.age} years old.`)
})