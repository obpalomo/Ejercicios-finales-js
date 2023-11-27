/* En base a la api de Rick and Morty (https://rickandmortyapi.com/),
vamos a desarrollar una página dinámicamente en la que visualizar una 
galería con las imagenes y los nombres de los personajes de la serie.
Para ellos es necesario usar 
el endpoint 'https://rickandmortyapi.com/api/character/'.

Si te fijas en la respuesta de la api, 
la imagen está en la propiedad 'image' 
y el título en la propiedad 'name'. */

const myMain$$ = document.querySelector('main');

const catchRickAndMorty = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/");
  const res = await response.json();
  /* console.log(res.results); */
  return res.results;
};

const charactersDetails = (characterWithoutMap) => {
  /* console.log(characterWithoutMap); */
  // const mappedCharacters = characterWithoutMap.map((character) => ({
  //     name: character.name,
  //     status: character.status,
  //     image: character.image,
  // }))
  return characterWithoutMap.map((character) => ({
    name: character.name,
    status: character.status,
    image: character.image,
  }));
  /* console.log(mappedCharacters); */
};

const drawRickAdnMorty = (charactersDetails) => {
    myMain$$.innerHTML = "";
    /* console.log(charactersDetails); */
    for (const details of charactersDetails) {
        let characterFigure = document.createElement('div');

        let characterH2$$ = document.createElement('h2');
        characterH2$$.textContent = details.name;

        let characterImg = document.createElement('img')
        characterImg.setAttribute('src', details.image);
        characterImg.setAttribute('alt', details.name);

        let characterP$$ = document.createElement('p');
        characterP$$.textContent = `Status: ${details.status}`


        characterFigure.appendChild(characterH2$$);
        characterFigure.appendChild(characterImg);
        characterFigure.appendChild(characterP$$);
        myMain$$.appendChild(characterFigure);
    }

}

const drawInputSearch = (characters) => {
    /* console.log(characters); */
    const input$$ = document.querySelector('input');
    input$$.addEventListener('input', ()=>searchCharacters(characters, input$$.value))
};

const searchCharacters = (characters, filtro) => {
/*     console.log("filtro");
    console.log("characters"); */
    let filteredCharacter = characters.filter((character) => character.name.toLowerCase().includes(filtro.toLowerCase()));
    /* console.log(filteredCharacter); */

    drawRickAdnMorty(filteredCharacter);
};

const init = async () => {
  const characters = await catchRickAndMorty();
  /* console.log(characters); */

  const mappedCharacters= charactersDetails(characters);
  /* console.log(mappedCharacters); */
  
  drawRickAdnMorty(mappedCharacters);

  drawInputSearch(mappedCharacters);

};

init();
