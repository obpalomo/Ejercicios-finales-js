/* Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen
 los usuarios.
 */

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];



let totalVolume = 0; // Inicializamos la suma de los volúmenes

for (const user of users) {
    for (const v in user.favoritesSounds) {
        const sound = user.favoritesSounds[v];
        totalVolume += sound.volume;
    }
}

const totalFavorites = users.length * Object.keys(users[0].favoritesSounds).length;
const averageVolume = totalVolume / totalFavorites;

console.log(`La media del volumen de los sonidos favoritos de los usuarios es: ${averageVolume}`);

