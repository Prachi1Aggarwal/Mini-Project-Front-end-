// document.body.innerHTML = "5"+2+2;

// document.body.innerHTML = 2+2+"5";

// document.body.innerHTML = 5-"A";
// document.body.innerHTML = "5" == 5;
// document.body.innerHTML = "5" === 5;
// document.body.innerHTML = "5" != 5;
// document.body.innerHTML = "5" !== 5;

/*let a = 10;
let b = 5;
var c = a+b;

document.body.innerHTML = `The sum of ${a} and ${b} is ${c}`;*/

function table(){
    let num = parseInt(document.getElementById("box").value);
    let outputBox = document.getElementById("output");
    outputBox.innerHTML= "";
    let tableEntry = "";
    for(let i=1; i<11; i++){
        tableEntry += `${num} x ${i} = ${num*i} <br>`;
    }
    outputBox.innerHTML = tableEntry;
}
