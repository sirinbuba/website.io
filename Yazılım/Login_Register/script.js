var a = document.getElementById("loginbtn");
var b = document.getElementById("registerbtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
  x.style.left = "4px";
  y.style.right = "-520px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 1;
  y.style.opacity = 0;
  document.title = 'Giriş Yap';
}

function register() {
  x.style.left = "-520px";
  y.style.right = "4px";
  a.className = "btn";
  b.className += " white-btn";
  x.style.opacity = 0;
  y.style.opacity = 1;
  document.title = 'Kaydol';
}
