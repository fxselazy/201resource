var problem= parseInt(prompt("Enter the number of Math questions generate"));
const ranNum = () => {
    return Math.floor(Math.random()*10) +1;
}
const ranOp = () => {
    let op = ['+','-','*'];
    return op[Math.floor(Math.random()*3)]
}
const result  = document.getElementById("result");
for (let i = 1; i <= problem; i++){
    var input = document.createElement("INPUT");
    var x = document.createElement("x");
    x.setAttribute("id","x" + i);
    x.innerHTML = `${ranNum()} ${ranOp()} ${ranNum()}`
    input.setAttribute("id","input" + i);
    x.appendChild(input)
    result.appendChild(x)
    result.appendChild(document.createElement("br")); 
}

let temp = result.firstElementChild
for (let i = 1; i <= result.childElementCount; i++){
    let input = document.getElementById("input" + i);
    let firstIn = document.getElementById("x" + i).firstChild.nodeValue
    input.setAttribute("value", firstIn)
    console.log(document.getElementById("x"+ i).firstChild.nodeValue);
    
} 