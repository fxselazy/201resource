class CookieUtil {
    static get(name) {
      console.log(`all cookies: ${document.cookie}`);
      let cookieName = `${encodeURIComponent(name)}=`,
      cookieStart = document.cookie.indexOf(cookieName),
      cookieValue = null;
      console.log(`cookieName = ${cookieName}`);
      console.log(`cookieStart = ${cookieStart}`);
   
  
      if (cookieStart > -1) {
        let cookieEnd = document.cookie.indexOf(";", cookieStart);
        console.log(`cookieEnd = ${cookieEnd}`);
        if (cookieEnd == -1) {
          cookieEnd = document.cookie.length;
        }
        cookieValue = decodeURIComponent(
        document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
        );
          console.log(`cookieValue = ${cookieValue}`);
      }
  
      return cookieValue;
    }
  
    static set(value) {
      let cookieText = `${encodeURIComponent('color')}=${encodeURIComponent(value)}`;
      let expires = new Date();
      expires.setDate(expires.getDate() + 7);
      cookieText += `; expires=${expires.toUTCString()}`;
       document.body.style.backgroundColor = value;
      console.log(`cookieText = ${cookieText}`);
      document.cookie=cookieText;
    }
  
    static unset(name) {
      CookieUtil.set(name, "", new Date(0));
    }
  }
document.getElementsByClassName("grid-container")[0].addEventListener("click", function(event) {
    CookieUtil.set(event.target.innerText);
  });
  
  document.body.style.backgroundColor = CookieUtil.get("color");