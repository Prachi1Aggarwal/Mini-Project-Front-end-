num1 = document.getElementById("num1");
num2 = document.getElementById("num2");


btn1 = document.getElementById("add");
btn2 = document.getElementById("subtract");
btn3= document.getElementById("multiply");
btn4 = document.getElementById("divide");

output = document.getElementById("output");

btn1.addEventListener("click",()=>{
    let a = parseInt(num1.value);
    let b = parseInt(num2.value);
    output.value = a+b;

})

btn2.addEventListener("click",()=>{
    let a = parseInt(num1.value);
    let b = parseInt(num2.value);
    output.value = a-b;

})

btn3.addEventListener("click",()=>{
    let a = parseInt(num1.value);
    let b = parseInt(num2.value);
    output.value = a*b;

})

btn4.addEventListener("click",()=>{
    let a = parseInt(num1.value);
    let b = parseInt(num2.value);
    output.value = a/b;

})