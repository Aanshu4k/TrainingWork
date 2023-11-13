var x=1;
let y=1;
const z=4;//const is also global scoped 
if(true){
    var x=2;//global scoped : public, if changes made in this scope it will reflect through the entire code
    let y=2;// block scoped : private
}
console.log(x);

console.log(y);