const btn = document.getElementById("btn")
const colortext = document.getElementById("color")
const wrap = document.getElementById("wrap")
const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']



btn.addEventListener('click',function(){

let hexc = "#"
for(let i=0;i<=5;i++){
    hexc+=randHexValue()
}
wrap.style.backgroundColor = hexc
colortext.innerHTML = hexc

})


function randHexValue(){
    let randomIndex = Math.floor(Math.random()*16)
    return hex[randomIndex]
}