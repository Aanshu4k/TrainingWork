//regular functions
function func1() {
    console.log('I am a Regular Function');
}
func1();

//function expression
const func2 = function () {
    console.log('I am a Function Expression');
}
func2();

//Arrow Function
const func3 = () => {
    console.log('I am an Arrow Function');
}
func3();

//Immediately Invokable function Expression
(function(){
    console.log('IIFE called '); //there is no function Name as it's calling itself
})();