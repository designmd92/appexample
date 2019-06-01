var random = (Math.floor(Math.random()*10)+1);
var name = 'images/img'.concat(random).concat('.png');
var image, content, congrats, button, entry, act, incorrect;
var alts = ["bed","car","blackboard","backpack","fridge","window","cap","table","bat","sneakers"];


function show(){
    act = document.getElementById("activity").style.display = 'block';
    image  = document.getElementById("image");
    image.src = name;
    image.alt = alts[random-1];
}
function correct(){
    entry = document.getElementById("entry").value;
    if(entry == image.alt){
        act = document.getElementById("activity").style.display = 'none';
        congrats = document.getElementById("congrats").style.display = 'block';
        content = document.getElementById("content").style.background = 'green';
        button = document.getElementById("opt").style.display = 'none';
    }
    else if(entry != image.alt){
        act = document.getElementById("activity").style.display = 'none';
        incorrect = document.getElementById("incorrect").style.display = 'block';
        content = document.getElementById("content").style.background = 'red';
        button = document.getElementById("opt").style.display = 'none';
    }
}
function changei(){
    incorrect = document.getElementById("incorrect").style.display = 'none';
    entry = document.getElementById("entry").value = "";
    button = document.getElementById("opt").style.display = 'block';
    content = document.getElementById("content");
    content.style.background = 'url("https://designmd92.github.io/appexample/images/backgroundgame.png")';
    content.style.backgroundPosition = 'center';
    act  = document.getElementById("activity").style.display = 'block';
}
function change(){
    random = (Math.floor(Math.random()*10)+1);
    name = 'images/img'.concat(random).concat('.png');
    entry = document.getElementById("entry").value = "";
    congrats = document.getElementById("congrats").style.display = 'none';
    button = document.getElementById("opt").style.display = 'block';
    content = document.getElementById("content");
    content.style.background = 'url("https://designmd92.github.io/appexample/images/backgroundgame.png")';
    content.style.backgroundPosition = 'center';
    act  = document.getElementById("activity").style.display = 'block';
    image  = document.getElementById("image");
    image.src = name;
    image.alt = alts[random-1];
}
