<<<<<<< HEAD
import {Professional} from "./professional"
=======
import {Professional} from "./professional";
>>>>>>> main

export class Movie{

    public title: string;
    public releaseYear: number;
    public actors: Professional[];
<<<<<<< HEAD
    public nacionality: string;
=======
    public nationality: string;
>>>>>>> main
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public nisMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

<<<<<<< HEAD
constructor(titulo:string,año: number,nacionalidad: string,genero: string){

     this.title = titulo;
     this.releaseYear = año;
     this.nacionality = nacionalidad;
     this.mainCharacterName;
     this.genre = genero;
}
=======
    constructor(title:string,releaseYear: number,nationality: string,genre: string){

        this.title = title;
        this.releaseYear = releaseYear;
        this.actors;
        this.nationality = nationality;
        this.director;
        this.writer;
        this.language;
        this.plataforma;
        this.nisMCU;
        this.mainCharacterName;
        this.producer;
        this.distributor;
        this.genre = genre;
    }

    public movieData() : void{
        console.log(this);
        
    }
>>>>>>> main
}