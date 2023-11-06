/* Dado el siguiente javascript, usa .find() para econtrar el alien de 
nombre 'Cucushumushu' 
y la mutación 'Porompompero'. 
Una vez que los encuentres, añade la  .mutation al alien con el valor de la mutación encontrada. */

const aliens = [
  { name: "Zalamero", planet: "Eden", age: 4029 },
  { name: "Paktu", planet: "Andromeda", age: 32 },
  { name: "Cucushumushu", planet: "Marte", age: 503021 },
];

const mutations = [
  {
    name: "Porompompero",
    description:
      "Hace que el alien pueda adquirir la habilidad de tocar el tambor",
  },
  {
    name: "Fly me to the moon",
    description: "Permite volar, solo y exclusivamente a la luna",
  },
  {
    name: "Andando que es gerundio",
    description: "Invoca a un señor mayor como Personal Trainer",
  },
];

const findAlien = aliens.find(alien => {
    if (alien.name === 'Cucushumushu') {
        const findMutations = mutations.find(mutation => {
            if (mutation.name === 'Porompompero') {
                alien.mutation = 'Mutacion encontrada'
            }
        })
        return alien;
    }
})

console.log(findAlien);
