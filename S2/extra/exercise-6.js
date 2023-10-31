/* Crea una función llamada ``swap`` que reciba 3 parametros. Un array y dos parametros más que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante. */


function swap(array, index1, index2) {
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    return array;
}



miArray = [1, 2, 3, 4, 5, 6, 7, 8];
indice1 = 4;
indice2 = 5;

let ejercicio = swap(miArray, indice1, indice2);
console.log(ejercicio);

