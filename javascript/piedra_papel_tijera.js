let player;
let pc;

alert("¡¡Hora de jugar piedra, papel o tijera!!")

function random(){
    return Math.ceil(Math.random()*3)
}

player = prompt("Elije 1 para piedra, 2 para papel, 3 para tijera");
pc = random();
alert("Tu elegiste " + choice(player));
alert("PC eligio " + choice(pc));

if(player == pc){
    alert("EMPATE")
}else if(player == 1 && pc == 3){
    alert("Ganasteee wooo :D")
}else if(player == 2 && pc == 1){
    alert("Ganasteee wooo :D")
}else if(player == 3 && pc == 2){
    alert("Ganasteee wooo :D")
}else{
    alert("Perdiste :(")
}

function choice(play){
    let result = " "
    if(play == 1){
        result = "Piedra 🥌"
    }else if (play == 2){
        result = "Papel 📄"
    }else if (play == 3){
        result = "Tijera ✂"
    }else{
    result = "Eleccion incorrecta"
    }
    return result;
}




















