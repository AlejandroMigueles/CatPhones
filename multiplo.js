function multiplos(){
    let x=document.getElementById("num").value;
    let mult=[];
    if (x>5){
        for (var i = 1; i <= x; i++) {
            if (i % 5 == 0) {
                mult.push(i);   //guarda los multiplos en un array
            }
        }
        alert(`Los múltiplos de 5 anteriores al número ${x} son ${mult}`);
    }
    else if (x==5){
        alert("5 es único múltiplo de 5");
    }
    else if(x<5 && x>0){
        alert("El número es menor que 5, por lo tanto no tiene múltiplos de 5 menores al mismo");
    }
    else{
        alert("Escribe un numero mayor o igual a 5");
    }

    console.log("Los multiplos de 5 anteriores al número elegido son: " + mult);
}
