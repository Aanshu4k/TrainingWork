const add=function() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    if(!isNaN(a)&&!isNaN(b))
        document.getElementsByClassName("res").innerHTML = a + b;
    else
    document.getElementsByClassName("res").innerHTML = a + b;
        alert("Not a Number");
}
function subt() {
    let a = parseFloat(document.getElementById("num1").value);//let a = +document.getElementById("num1").value;
    let b = parseFloat(document.getElementById("num2").value);
    if(!isNaN(a)&&!isNaN(b))
        document.getElementById("result").innerHTML = a - b;
    else
        alert("Not a Number");
}
function mult() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    if(!isNaN(a)&&!isNaN(b))
        document.getElementById("result").innerHTML = a * b;
    else
        alert("Not a Number");
}
function div() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    if(!isNaN(a)&&!isNaN(b))
        document.getElementById("result").innerHTML = a / b;
    else
        alert("Not a Number");
}