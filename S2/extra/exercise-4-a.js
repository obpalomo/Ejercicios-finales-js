/* Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos. */

/* Sugerencia de función: */


function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return i;
        }
    }
    return false;
}


let miArray = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
let textbuscado = "Mosca"

let busqueda = findArrayIndex (miArray, textbuscado);

if (busqueda === true) {
    console.log(`El texto "${textbuscado}" se encuentra en la posición ${busqueda} del array.`)
} else {
    console.log(`El texto "${textbuscado}" no se encuentra en el array.`)
}
