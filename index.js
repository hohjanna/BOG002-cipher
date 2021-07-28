import cipher from './cipher.js';
//cipher.descifrado("B", 1)


/*id de la sección cifrado*/

let texto = document.getElementById("denuncia");
let posicion = document.getElementById("desplazamiento");
let btncifrado = document.getElementById("btncifrado1");
let resultado = document.getElementById("textoCifrado");
let posicion2 = document.getElementById("clave");



texto.addEventListener("keyup", function() {
    texto.value = texto.value.toUpperCase();

});



/*Un evento es inutil sino se le asigna alguna función, en este caso el 
evento "click" invoca la función de cifrar por medio de btncifrado1()*/

btncifrado.addEventListener("click", btncifrado1);


function btncifrado1() {
    let textoIngresado = texto.value;
    let numeroIngresado = posicion.value;
    resultado.value = cipher.encode(textoIngresado, numeroIngresado);
}


/*id de la sección descifrado*/

let textoCifrado = document.getElementById("denunciaCifrada");
let btndescifrado = document.getElementById("btndescifrado1");
let salida = document.getElementById("textoDescifrado");

textoCifrado.addEventListener("keyup", function() {
    textoCifrado.value = textoCifrado.value.toUpperCase();

});



btndescifrado.addEventListener("click", btndescifrado1);

function btndescifrado1() {
    let textoIngresado2 = textoCifrado.value;
    let posicionActual = posicion2.value;
    salida.value = cipher.decode(textoIngresado2, posicionActual);
}

/*Necesitamos 2 "parametros" para que la función descifrado 
tome los 2 valores de: mensaje cifrado y además la posición en la 
cual se encuentra cada letra (por eso salía undefined) ya que como parametro solo estaba
textoIngresado2*/

/*function btndescifrado1() {
    let textoIngresado2 = textoCifrado.value;
    let resultadoDescifrado = resultado2.value = cipher.descifrado(textoIngresado2);
}*/

let opacidad = document.querySelectorAll("#contenedorCompartir")[0];
let cajalogos = document.querySelectorAll(".contenedorx")[0];
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".compartir")[0];

/*abrir.addEventListener("click", function() {
    opacidad.style.opacity = "1";
    opacidad.style.visibility = "visible";
    cajalogos.classList.toggle = ("close");
});*/

cerrar.addEventListener("click", function() {
    cajalogos.classList.toggle = ("close");
    opacidad.style.opacity = "0";
    opacidad.style.visibility = "hidden";
});

abrir.addEventListener("click", function() {
    opacidad.style.opacity = "1";
    opacidad.style.visibility = "visible";
    cajalogos.classList.toggle = ("close");

    let posicionClave = posicion.value;
    document.getElementById("textoCompartir").innerHTML = "La clave es  " + posicionClave;
});


let clear = document.getElementById("reload");
clear.addEventListener("click", reload);

function reload() {
    texto.value = "";
    posicion.value = "";
    resultado.value = "";
    textoCifrado.value = "";
    salida.value = "";
    posicion2.value = "";
}