import {Professional} from "./professional";

export class Movie{

    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nationality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public nisMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

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
}