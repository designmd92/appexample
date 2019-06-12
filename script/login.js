var logincode = "0hL1mrK2";
var gamebox = document.getElementById("gamebox");
var loginbox = document.getElementById("loginbox");

function login() {
    var aux = document.getElementById("codelog");
    if (aux.value == logincode) {
        gamebox.style.display = "block";
        loginbox.style.display = "none";
    }
    else {
        alert("Wrong Code .. Type again");
    }
}

function logout() {
    gamebox.style.display = "none";
    document.getElementById("activity1").style.display = "none";
    document.getElementById("activity2").style.display = "none";
    loginbox.style.display = "block";
}