//1.1 show the first menu of appetizer
var firstap = document.getElementById("appetizer").firstElementChild;
console.log(firstap);
//1.2 show a second menu item  of soup menu
var secsoup = document.getElementById("soup").childNodes[3];
console.log(secsoup);
//1.3 show all menus of vegan class
var megan = document.getElementsByClassName("vegan");
for (let i = 0; i < megan.length; i++) {
    console.log(megan[i]);
}
//1.4 insert a new list item "<li class="seafood">Shrimp Rolls</li>" to the end of appetizer menu 
var tag = document.createElement("LI");
var text = document.createTextNode("Shimp Rolls");
tag.appendChild(text);
tag.setAttribute("class", "seafood");
var insert = document.getElementById("appetizer").appendChild(tag);
console.log(insert);
//1.5 change a classname of Tuna Sandwich to "seafood"
var apMenu = document.getElementById("appetizer")
let curMenu = apMenu.firstChild
while (curMenu !== apMenu.lastChild) {
    if (curMenu.innerHTML === "Tuna Sandwich") {
        curMenu.setAttribute("class", "seafood")
        console.log(curMenu);
    }
    curMenu = curMenu.nextSibling
}
//1.6 insert a new list item "<li class="seafood">Shrimp-Corn Soup></li> before <li class="meat">Beef Soup</li>
var tagl = document.createElement("LI");
var textl = document.createTextNode("Shimp-Corn Soup");
tagl.appendChild(textl);
tagl.setAttribute("class", "seafood");
var insert = document.getElementById("soup");

let soupMenu = document.getElementById("soup");
let cursMenu = soupMenu.firstChild
while (cursMenu !== soupMenu.lastChild) {
    if (cursMenu.innerHTML === "Beef Soup") {
        insert.insertBefore(tagl,cursMenu);
        console.log(cursMenu);
    }
    cursMenu = cursMenu.nextSibling
} 
//1.7 show the menu category [Appetizer|Soup] of a list item <li class="meat">Beef Soup</li>
let soupMenus = document.getElementById("soup");
let cursMenus = soupMenus.firstChild
while (cursMenus !== soupMenus.lastChild) {
    if (cursMenus.innerHTML === "Beef Soup") {
        console.log(cursMenus.parentNode.getAttribute("id"));
    }
    cursMenus = cursMenus.nextSibling
} 
//1.8 remove a menu item <li class="meat">Beef Soup</li>
let soupMenusQ = document.getElementById("soup");
let cursMenusQ = soupMenusQ.firstChild
while (cursMenusQ !== soupMenusQ.lastChild) {
    if (cursMenusQ.innerHTML === "Beef Soup") {
        soupMenusQ.removeChild(cursMenusQ)
        break;
    }
    cursMenusQ = cursMenusQ.nextSibling
} 

let sm = document.getElementById("soup")
let fc = sm.parentNode
console.log(fc)
console.log(sm.firstChild)
console.log(sm.firstElementChild)
let ee = document.getElementById("meat")