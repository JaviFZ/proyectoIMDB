import { IMDB } from "./imdb";
import { pelicula1, pelicula2, pelicula3, pelicula4 } from "./movieTest";


let imdb = new IMDB([pelicula1, pelicula2, pelicula3, pelicula4 ]);

console.log(imdb);


JSON.stringify(imdb);
