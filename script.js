// alert("Please Tap any key to change the background color")
const b1=document.querySelector(".btn1")
b1.innerHTML="darkorchid"
const b2=document.querySelector(".btn2")
b2.innerHTML="Yellow"
const b3=document.querySelector(".btn3")
const b4=document.querySelector(".btn4")
const b5=document.querySelector(".btn5")
b5.innerHTML="hotpink"
const b6=document.querySelector(".btn6")
function blue(){
    document.body.style.backgroundColor="darkorchid"
   b1.style.backgroundColor="darkorchid"
}
function teal(){
    document.body.style.backgroundColor="yellow"
    b2.style.backgroundColor="yellow"
}
function cyan(){
    document.body.style.backgroundColor="cyan"
    b3.style.backgroundColor="cyan"
}
function lime(){
    document.body.style.backgroundColor="lime"
    b4.style.backgroundColor="lime"
}
function pink(){
    document.body.style.backgroundColor="hotpink"
    b5.style.backgroundColor="hotpink"
}
function magenta(){
    document.body.style.backgroundColor="magenta"
    b6.style.backgroundColor="magenta"
}
b1.addEventListener("click",blue)
b2.addEventListener("click",teal)
b3.addEventListener("click",cyan)
b4.addEventListener("click",lime)
b5.addEventListener("click",pink)
b6.addEventListener("click",magenta)