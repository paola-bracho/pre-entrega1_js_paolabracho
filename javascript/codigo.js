let look = prompt("Desea revisar el inventario?")

if (look == "si") {
    for (let x = 0; x <= 8; x++) {
        console.log("inventario numero " + x);

        for (let y = 0; y <= 5; y++) {
            console.log("objeto " + y);
        }
    }    
} else {
    alert("No es dia de revision de inventario");
}

