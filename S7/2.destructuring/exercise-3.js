/* En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función
e imprimiendolo por consola.
 */


const animalFunction = () => {
    return {name1: 'Bengal Tiger', race: 'Tiger'}
};

const {name1, race} = animalFunction ();

console.log(name1);
console.log(race);
