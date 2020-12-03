// 62130500046 Nirawat Poramathumsakul
function backTo() {
  history.back();
}

function nextTo() {
  history.forward();
}
var user = { userName: "Nirawat", userID: "62130500046" }
let writestate = document.getElementById("user-state")
writestate.addEventListener("click", function () {
  history.pushState(user, "user", "content1.html");
  console.log(window.history.state);
});
window.onload = function () {
let show = document.createElement("h2");
show.innerText = window.history.state; 
}
