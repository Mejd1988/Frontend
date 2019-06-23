import { Evenement } from './evenement';

export class Gebruiker {

    id: number
    gebruikersnaam: string
    wachtwoord: string
    evenementenBezoeken: Evenement[];
        
        constructor(){}
}
