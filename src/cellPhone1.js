//funcion para mostrar las caracteristicas al oprimir un boton
function mostrarOcultar1(){
    var y = document.getElementById('showXiaomi');
    if (y.style.visibility === 'hidden') {
        y.style.visibility = 'visible';
    } else {
        y.style.visibility = 'hidden';
    }
}
function mostrarOcultar2(){
    var y = document.getElementById('showSamsung');
    if (y.style.visibility === 'hidden') {
        y.style.visibility = 'visible';
    } else {
        y.style.visibility = 'hidden';
    }
}
function mostrar3() {
    var y = document.getElementById('showIphone');
    if (y.style.visibility === 'hidden') {
    y.style.visibility = 'visible';
    } else {
    y.style.visibility = 'hidden';
    }
}
//Funcion para mostrar el precio final de la compra
function price() {
let impuesto;
let precio;
let precioFinal;
//la variable celular es la que selecciona el usuario usando el form select
var celular = document.getElementById('celular').value;
switch (celular) {
    case '1':
        precio = 350;
        impuesto = precio * 0.16;
        precioFinal = precio + impuesto;
        alert("el costo del equipo es: $" + precio);
        alert("el costo del impuesto es: $" + impuesto);
        alert("El precio final de su compra sería: $" + precioFinal);
        confirm("¿Desea comprar el Xiaomi?");
        break;
    case '2':
        precio = 500;
        impuesto = precio * 0.15;
        precioFinal = precio + impuesto;
        alert("el costo del equipo es: $" + precio);
        alert("el costo del impuesto es: $" + impuesto);
        alert("El precio final de su compra sería: $" + precioFinal);
        confirm("¿Desea comprar el Samsung?");
        break;
    case '3':
        precio = 900;
        impuesto = precio * 0.13;
        precioFinal = precio + impuesto;
        alert("el costo del equipo es: $" + precio);
        alert("el costo del impuesto es: $" + impuesto);
        alert("El precio final de su compra sería: $" + precioFinal);
        confirm(" ¿Desea comprar el Iphone?");
        break;
        default:
        alert("Para mostrarte los precios debes seleccionar una opción");
}
}