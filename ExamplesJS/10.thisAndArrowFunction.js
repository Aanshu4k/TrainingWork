const myNameIs={
    name:"Aanshu Kumar",
    regularFunction: function(){
        console.log(this.name);//here, this keyword can access to global context hence name is defined 
    },
    arrowFunction: ()=> {
        //We use arrow function and this keyword only when we require local context access
        console.log(this.name);//here,this keyword can have only access to local context in which name is undefined
    }
}

myNameIs.regularFunction();
myNameIs.arrowFunction();