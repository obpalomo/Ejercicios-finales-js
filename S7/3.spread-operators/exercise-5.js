/* Dado el siguiente array. 
Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. 
De nuevo, usando spread operatos.
 */

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
colors.splice(2,1);

const colors2 = [...colors];
console.log(colors2);

