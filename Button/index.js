var btn1=document.getElementById('one');
var btn2=document.getElementById('two');
var btn3=document.getElementById('three');
var btn4=document.getElementById('four');
var btn5=document.getElementById('five');
var btn6=document.getElementById('six');
var btn7=document.getElementById('seven');
var btn8=document.getElementById('eight');
var btn9=document.getElementById('nine');
var para = document.getElementById('para');
btn1.addEventListener('click',function(){
    para.style.color='red';
},false);
btn2.addEventListener('click',function(){
    para.style.color='green';
},false);
btn3.addEventListener('click',function(){
    para.style.color='blue';
},false);
btn4.addEventListener('click',function(){
    para.style.fontSize='10px';
},false);
btn5.addEventListener('click',function(){
    para.style.fontSize='20px';
},false);
btn6.addEventListener('click',function(){
    para.style.fontSize='30px';
},false);
btn7.addEventListener('click',function(){
    para.style.fontFamily='cursive';
},false);
btn8.addEventListener('click',function(){
    para.style.fontFamily='sans-serif';
},false);
btn9.addEventListener('click',function(){
    para.style.fontFamily='monospace';
},false);