/* Usa un bucle para recorrer el array de productos (`products`)
y añade al array `goodProducts` los que tengan más de 20 ventas (`sellCount`)
y al array `badProducts` los que tengan menos.
 */

const goodProducts = new Array ();
const badProducts = new Array ();
const products = [
    {name: 'Gorra de rodilla', sellCount: 10},
    {name: 'Pantalón de pana', sellCount: 302},
    {name: 'Reloj de papel albal', sellCount: 23},
    {name: 'Inpar de zapatos', sellCount: 6}
];

products.forEach((product) => {
    if (product.sellCount > 20) {
        goodProducts.push(product);
    } else {
        badProducts.push(product);
    }
})

console.log('Tienen mas de 20 ventas', goodProducts);
console.log('Tienen mas de 20 ventas', badProducts);

