export class Quote {
    showDescription!: boolean;
    constructor(public id: number,public name: string,public saying: string,public datePosted: Date){
        this.showDescription=false;
      }
}
