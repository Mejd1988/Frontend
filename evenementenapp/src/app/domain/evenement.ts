import { Locatie } from './locatie';
import { Artiest } from './artiest';

export class Evenement {


    naam: string;
    locatie : Locatie;
    datum: string;
    toelichting: string;
    website: string;
    artiesten: Artiest[];
    

}
