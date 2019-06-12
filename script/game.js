
function act1() {
    document.getElementById("activity1").style.display = "block";
    document.getElementById("activity2").style.display = "none";
}

function act2() {
    document.getElementById("activity2").style.display = "block";
    document.getElementById("activity1").style.display = "none";
}

function check(checkbox) {
    chk = checkbox.parentNode.querySelector("[type=checkbox]:not(#" + checkbox.id + ")");
    if (chk.checked){
        chk.checked = false;
    }
}

function won1() {
    op1 = document.getElementById("op11");
    op2 = document.getElementById("op12");
    imgact = document.getElementById("imgact1").alt;
    aux = false;
    if(op1.checked){
        if(op1.name == imgact){
            aux = true;
        }
        else
        aux = false;
    }
    else if(op2.checked){
        if(op2.name == imgact){
            aux = true;
        }
        else
        aux = false;    
    }
    else aux = false;
    return aux;
}

function won2() {
    op1 = document.getElementById("op21");
    op2 = document.getElementById("op22");
    imgact = document.getElementById("imgact2").alt;
    aux = false;
    if(op1.checked){
        if(op1.name == imgact){
            aux = true;
        }
        else
        aux = false;
    }
    else if(op2.checked){
        if(op2.name == imgact){
            aux = true;
        }
        else
        aux = false;    
    }
    else aux = false;
    return aux;
}

function won3() {
    op1 = document.getElementById("op31");
    op2 = document.getElementById("op32");
    imgact = document.getElementById("imgact3").alt;
    aux = false;
    if(op1.checked){
        if(op1.name == imgact){
            aux = true;
        }
        else
        aux = false;
    }
    else if(op2.checked){
        if(op2.name == imgact){
            aux = true;
        }
        else
        aux = false;    
    }
    else aux = false;
    return aux;
}

function won4() {
    op1 = document.getElementById("op41");
    op2 = document.getElementById("op42");
    imgact = document.getElementById("imgact4").alt;
    aux = false;
    if(op1.checked){
        if(op1.name == imgact){
            aux = true;
        }
        else
        aux = false;
    }
    else if(op2.checked){
        if(op2.name == imgact){
            aux = true;
        }
        else
        aux = false;    
    }
    else aux = false;
    return aux;
}

function won5() {
    op1 = document.getElementById("op51");
    op2 = document.getElementById("op52");
    imgact = document.getElementById("imgact5").alt;
    aux = false;
    if(op1.checked){
        if(op1.name == imgact){
            aux = true;
        }
        else
        aux = false;
    }
    else if(op2.checked){
        if(op2.name == imgact){
            aux = true;
        }
        else
        aux = false;    
    }
    else aux = false;
    return aux;
}

function won6() {
    op1 = document.getElementById("op61");
    op2 = document.getElementById("op62");
    imgact = document.getElementById("imgact6").alt;
    aux = false;
    if(op1.checked){
        if(op1.name == imgact){
            aux = true;
        }
        else
        aux = false;
    }
    else if(op2.checked){
        if(op2.name == imgact){
            aux = true;
        }
        else
        aux = false;    
    }
    else aux = false;
    return aux;
}

function won() {
    if(won1() == true && won2() == true && won3() == true && won4() == true && won5() == true && won6() == true){
        alert('Correctly');
        document.getElementById("activity1").style.display = "none";
        document.getElementById("ch1").style.cursor = "default";
        document.getElementById("ch1").onclick = "none";
        document.getElementById("oka1").style.cursor = "default";
        document.getElementById("oka1").style.display = "inline-block";
        document.getElementById("ch1").style.background = "aqua";
    }
    else alert('Try Again');
}