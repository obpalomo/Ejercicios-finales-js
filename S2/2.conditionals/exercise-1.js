/* Comprueba en cada uno de los usuarios que tenga almenos dos
trimestres aprobados y añade la propiedad isApproved a
true o false en consecuencia.
Una vez lo tengas compruebalo con un console.log.
 */

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Abel Cabeza', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let alumn of alumns) {
    let TrimestresAprobados = [alumn.T1, alumn.T2, alumn.T3];
        alumn.isApproved = TrimestresAprobados >= 2;
}
console.log(alumns);