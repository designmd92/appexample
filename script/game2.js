function limitar(e, contenido, caracteres){
    var unicode=e.keyCode? e.keyCode : e.charCode;

    if(unicode==8 || unicode==46)
        return true;

    if(contenido.length>=caracteres)
        return false;
 
    return true;
}

function won21() {
    tx = document.getElementById("tx1").value;
    imgact = document.getElementById("imgact21").alt;
    aux = false;
    if(tx == imgact) {
        aux = true;
    }
    else
    aux = false;
    return aux;
}

function won22() {
    tx = document.getElementById("tx2").value;
    imgact = document.getElementById("imgact22").alt;
    aux = false;
    if(tx == imgact) {
        aux = true;
    }
    else
    aux = false;
    return aux;
}

function won23() {
    tx = document.getElementById("tx3").value;
    imgact = document.getElementById("imgact23").alt;
    aux = false;
    if(tx == imgact) {
        aux = true;
    }
    else
    aux = false;
    return aux;
}

function won24() {
    tx = document.getElementById("tx4").value;
    imgact = document.getElementById("imgact24").alt;
    aux = false;
    if(tx == imgact) {
        aux = true;
    }
    else
    aux = false;
    return aux;
}

function won25() {
    tx = document.getElementById("tx5").value;
    imgact = document.getElementById("imgact25").alt;
    aux = false;
    if(tx == imgact) {
        aux = true;
    }
    else
    aux = false;
    return aux;
}

function won26() {
    tx = document.getElementById("tx6").value;
    imgact = document.getElementById("imgact26").alt;
    aux = false;
    if(tx == imgact) {
        aux = true;
    }
    else
    aux = false;
    return aux;
}

function won27() {
    tx = document.getElementById("tx7").value;
    imgact = document.getElementById("imgact27").alt;
    aux = false;
    if(tx == imgact) {
        aux = true;
    }
    else
    aux = false;
    return aux;
}

function won28() {
    tx = document.getElementById("tx8").value;
    imgact = document.getElementById("imgact28").alt;
    aux = false;
    if(tx == imgact) {
        aux = true;
    }
    else
    aux = false;
    return aux;
}

function wona2() {
    if(won21() == true && won22() == true && won23() == true && won24() == true && won25() == true && won26() == true && won27() == true && won28() == true){
        alert('Correctly');
        document.getElementById("activity2").style.display = "none";
        document.getElementById("ch2").style.cursor = "default";
        document.getElementById("ch2").onclick = "none";
        document.getElementById("oka2").style.cursor = "default";
        document.getElementById("oka2").style.display = "inline-block";
        document.getElementById("ch2").style.background = "aqua";
    }
    else alert('Try Again');
}