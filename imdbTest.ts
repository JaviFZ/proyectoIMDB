import { IMDB } from "./imdb";
import { CoffeeAndCigarettes, TheDarjeelingLimited, TheLifeAquatic, TheRoyalTenenbaums } from "./movieTest";


let imdb = new IMDB([TheLifeAquatic, TheRoyalTenenbaums, TheDarjeelingLimited, CoffeeAndCigarettes ]);

console.log(imdb);


JSON.stringify(imdb);
