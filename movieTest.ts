import {Movie} from "./Movie"


import { BillMurray, CateBlanchett, JimJarmusch, OwenWilson, WesAnderson } from "./professionalTest";




export let TheLifeAquatic: Movie = new Movie("The Life Aquatic with Steve Zissou",2004,"Estados Unidos","comedia, aventuras");
// console.log(pelicula1);

TheLifeAquatic.director = WesAnderson;
TheLifeAquatic.writer = WesAnderson;
TheLifeAquatic.actors = [CateBlanchett, OwenWilson, BillMurray]
TheLifeAquatic.language = "Inglés";
TheLifeAquatic.plataforma = "Disney+";
TheLifeAquatic.nisMCU = false;
TheLifeAquatic.mainCharacterName = "Steve Zissou";
TheLifeAquatic.producer = "Wes Anderson, Barry Mendel, Scott Rudin";
TheLifeAquatic.distributor = "Buena Vista Pictures";


export let TheRoyalTenenbaums : Movie = new Movie("The Royal Tenenbaums", 2001,"Estados Unidos", "comedia");
// console.log(pelicula2);

TheRoyalTenenbaums.director = WesAnderson;
TheRoyalTenenbaums.writer = WesAnderson;
TheRoyalTenenbaums.actors = [OwenWilson, BillMurray]
TheRoyalTenenbaums.language = "Inglés";
TheRoyalTenenbaums.plataforma = "Prime video";
TheRoyalTenenbaums.nisMCU = false;
TheRoyalTenenbaums.mainCharacterName = "Royal Tenenbaum"
TheRoyalTenenbaums.producer = "Wes Anderson, Barry Mendel, Scott Rudin";
TheRoyalTenenbaums.distributor = "Buena Vista Pictures";

export let TheDarjeelingLimited: Movie = new Movie("The Darjeeling Limited",2007,"Estados Unidos","comedia, aventuras, drama");
// console.log(pelicula3);

TheDarjeelingLimited.director = WesAnderson;
TheDarjeelingLimited.writer = WesAnderson;
TheDarjeelingLimited.actors = [OwenWilson, BillMurray]
TheDarjeelingLimited.language = "Inglés";
TheDarjeelingLimited.plataforma = "Prime video";
TheDarjeelingLimited.nisMCU = false;
TheDarjeelingLimited.mainCharacterName = "Hermanos Whitman";
TheDarjeelingLimited.producer = "Wes Anderson, Alice Bamford, Roman Coppola, Jason Schwartzman";
TheDarjeelingLimited.distributor = "Walt Disney, Studios Motion Pictures";

export let CoffeeAndCigarettes: Movie = new Movie("Coffee and Cigarettes", 2003, "United States, Japan, Italy", "comedia, drama, independiente");
// console.log(pelicula4);

CoffeeAndCigarettes.director = JimJarmusch;
CoffeeAndCigarettes.writer = JimJarmusch;
CoffeeAndCigarettes.actors = [BillMurray, CateBlanchett]
CoffeeAndCigarettes.language = "Inglés";
CoffeeAndCigarettes.plataforma = "Disney+";
CoffeeAndCigarettes.nisMCU = false;
CoffeeAndCigarettes.mainCharacterName = "Cate, Shelly";
CoffeeAndCigarettes.producer = "Wes Anderson, Barry Mendel, Scott Rudin";
CoffeeAndCigarettes.distributor = "Buena Vista Pictures";



// pelicula4.movieData();


