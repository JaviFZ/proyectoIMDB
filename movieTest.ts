import {Movie} from "./Movie"
import {professional1} from "./professionalTest"
import {professional2} from "./professionalTest"
import {professional3} from "./professionalTest"
import {professional4} from "./professionalTest"
import {professional5} from "./professionalTest"

let pelicula1: Movie = new Movie("The Life Aquatic with Steve Zissou",2004,"Estados Unidos","comedia, aventuras");
console.log(pelicula1);

pelicula1.director = professional4;
pelicula1.writer = professional4;
pelicula1.language = "Inglés";
pelicula1.plataforma = "Disney+";
pelicula1.nisMCU = false;
pelicula1.mainCharacterName = "Steve Zissou";
pelicula1.producer = "Wes Anderson, Barry Mendel, Scott Rudin";
pelicula1.distributor = "Buena Vista Pictures";


let pelicula2: Movie = new Movie("The Royal Tenenbaums", 2001,"Estados Unidos", "comedia");
console.log(pelicula2);

pelicula2.director = professional4, professional1; 
pelicula2.writer = professional4, 
pelicula2.language = "Inglés";
pelicula2.plataforma = "Prime video";
pelicula2.nisMCU = false;
pelicula2.mainCharacterName = "Royal Tenenbaum"
pelicula2.producer = "Wes Anderson, Barry Mendel, Scott Rudin";
pelicula2.distributor = "Buena Vista Pictures";

let pelicula3: Movie = new Movie("The Darjeeling Limited",2007,"Estados Unidos","comedia, aventuras, drama");
console.log(pelicula3);

pelicula3.director = professional4;
pelicula3.writer = professional4;
pelicula3.language = "Inglés";
pelicula3.plataforma = "Prime video";
pelicula3.nisMCU = false;
pelicula3.mainCharacterName = "Hermanos Whitman";
pelicula3.producer = "Wes Anderson, Alice Bamford, Roman Coppola, Jason Schwartzman";
pelicula3.distributor = "Walt Disney, Studios Motion Pictures";
console.log(pelicula3);

let pelicula4: Movie = new Movie("Coffee and Cigarettes", 2003, "United States, Japan, Italy", "comedia, drama, independiente");
console.log(pelicula4);

pelicula4.director = professional5;
pelicula4.writer = professional5;
pelicula4.language = "Inglés";
pelicula4.plataforma = "Disney+";
pelicula4.nisMCU = false;
pelicula4.mainCharacterName = "Cate, Shelly";
pelicula4.producer = "Wes Anderson, Barry Mendel, Scott Rudin";
pelicula4.distributor = "Buena Vista Pictures";


