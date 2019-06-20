export class Evenement {
    
    constructor(
        private _id: number, 
        private _naam: string, 
        private _toelichting: string, 
        private _website: string) {
    }

    get id() : number { return this._id}
    get naam() : string { return this._naam}
    get toelichting() : string { return this._toelichting}
    get website() : string { return this._website}
}
