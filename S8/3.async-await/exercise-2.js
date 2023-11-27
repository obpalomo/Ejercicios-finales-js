/* Convierte la siguiente función con un fetch utilizando async-await. 
Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador; */

async function getCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const results = data.results;

    const nameWithLocation = results.map((character) => {
      return {
        name: character.name,
        location: character.location.name,
      };
    });
    console.log(`${name} - Location ${location}`);
  } catch (error) {
    console.error(error);
  }
}

getCharacters();

/* fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters)); */
