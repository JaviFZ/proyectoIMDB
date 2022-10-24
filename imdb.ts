import {Movie} from "./Movie"

import {Professional} from "./professional";




export class IMDB {
    public peliculas : Movie[];

    constructor(peliculas : Movie[]){
        this.peliculas = peliculas;
    }
} 