const clicker = document.getElementById("clicker__counter");
const image = document.getElementById("cookie");

function imageCookie() { 
    image.width = 200;
}

function cookieClick() {
    clicker.textContent++;
    image.width = 300;
    setTimeout((imageCookie),100)
    
}

image.onclick = cookieClick;
