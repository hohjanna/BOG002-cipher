const cipher = {
    encode,
    decode
}

function encode(texto, posicion) {
    if (!posicion || !texto) {
        throw new TypeError('error'); //Esta es la línea que usamos para arrojar un error//
    }

    let resultado = "";
    let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


    posicion = (posicion % 26 + 26) % 26;

    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            if (cadena.indexOf(texto[i]) != -1) {
                let cadenaPosicion = ((cadena.indexOf(texto[i]) + posicion) % 26);
                resultado += cadena[cadenaPosicion];
            } else {
                resultado += texto[i];
            }
        }

    }
    return resultado;

}

function decode(texto, posicion) {
    if (!posicion || !texto) {
        throw new TypeError('error');
    }

    let resultado = "";
    let cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    posicion = (posicion % 26 - 26) % 26;

    if (texto) {
        for (let i = 0; i < texto.length; i++) {
            let indiceEncontrado = cadena.indexOf(texto[i])
            if (indiceEncontrado != -1) {
                let cadenaPosicion = ((indiceEncontrado - posicion) % 26);
                resultado += cadena[cadenaPosicion];
            } else
                resultado += texto[i];
        }



    }
    return resultado;

}


export default cipher;