//62130500046
//Nirawat Poramathumsakul

//1. Add Id and Name
var stuname = document.getElementById("student-name")
var fullname = document.createTextNode("Student Name : Nirawat Poramathumsakul");
stuname.appendChild(fullname);
var stuid = document.getElementById("student-id")
var sid = document.createTextNode("Student Id : 62130500046");
stuid.appendChild(sid);

//2. Add course
//100
var row1 = document.createElement("TR");
console.log(row1)
var colinr1 = document.createElement("TH")
var c11 = document.createTextNode("INT100")
var c12 = document.createTextNode("IT Fundemental")
var c13 = document.createTextNode("3")
var c14 = document.createTextNode("A")
colinr1.appendChild(c11)
colinr1.appendChild(c12)
colinr1.appendChild(c13)
colinr1.appendChild(c14)
row1.appendChild(colinr1)
//101
var row2 = document.createElement("TR");
console.log(row2)
var colinr2 = document.createElement("TH")
var c21 = document.createTextNode("INT101")
var c22 = document.createTextNode("Computer Programming I")
var c23 = document.createTextNode("3")
var c24 = document.createTextNode("C")
colinr2.appendChild(c21)
colinr2.appendChild(c22)
colinr2.appendChild(c23)
colinr2.appendChild(c24)
row2.appendChild(colinr2)
//102
var row3 = document.createElement("TR");
console.log(row3)
var colinr3 = document.createElement("TH")
var c31 = document.createTextNode("INT102")
var c32 = document.createTextNode("Web Technology")
var c33 = document.createTextNode("1")
var c34 = document.createTextNode("B+")
colinr3.appendChild(c31)
colinr3.appendChild(c32)
colinr3.appendChild(c33)
colinr3.appendChild(c34)
row3.appendChild(colinr3)
//3
var row4 = document.createElement("TR");
console.log(row4)
var colinr4 = document.createElement("TH")
var c41 = document.createTextNode("7")
var c42 = document.createTextNode("3.07")
colinr4.appendChild(c41)
colinr4.appendChild(c42)
row4.appendChild(colinr4)