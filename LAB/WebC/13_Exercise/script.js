function backTo() {
  history.back();
}

function nextTo() {
  history.forward();
}

function openMenu(menu){
  let menuLink;
  switch(menu){
    case "Window": menuLink="./pages/window.html";break;
    case "Location": menuLink="./pages/location.html";break;
    case "Navigation":menuLink="./pages/navigation.html";break;
    case "History":menuLink="./pages/history.html";break;

  }
  window.open(menuLink,target="iframe_content");
}

