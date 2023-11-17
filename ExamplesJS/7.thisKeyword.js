'use strict' //this will make the access only to the context of the function
function printThis(){
    console.log(this.name)
}
printThis();    // this refers to the window or global object 

