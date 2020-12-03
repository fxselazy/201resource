let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');
let color5 = document.getElementById('color5');
let color6 = document.getElementById('color6');

color1.addEventListener('click', changeBGC);
color2.addEventListener('click', changeBGC);
color3.addEventListener('click', changeBGC);
color4.addEventListener('click', changeBGC);
color5.addEventListener('click', changeBGC);
color6.addEventListener('click', changeBGC);

function changeBGC(event) {
    BGC = document.body.style.backgroundColor = event.target.innerHTML;
    var today = new Date();
    today.setDate(today.getDate() + 7);
    CookieUtil.setCK("background",BGC, today)
}


class CookieUtil {
    static getCK(name) {
        let cookieName = `${encodeURIComponent(name)}=`,
        cookieStart = document.cookie.indexOf(cookieName),
        cookieValue = null;
        console.log(`cookieName = ${cookieName}`);
        console.log(`cookieStart = ${cookieStart}`);
        if (cookieStart > -1) {
        let cookieEnd = document.cookie.indexOf(";", cookieStart);
        if (cookieEnd == -1) {
        cookieEnd = document.cookie.length;
        console.log(`cookieEnd = ${cookieEnd}`);
        }
        cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        console.log(`cookieEnd = ${cookieValue}`);
        }   
        
        
        return cookieValue;
    }
    static setCK(name, value, expires) {
        let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`
        if (expires instanceof Date) {
        cookieText += `;expires=${expires. toUTCString()}`;
        }
        document.cookie = cookieText;
    }
}
(function () {
    document.body.style.backgroundColor = CookieUtil.getCK("background")
})()