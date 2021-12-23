export class Quote {
    showDescription!: boolean;
  static id: number;
  static datePosted: Date;
    constructor(public id: number,public name: string,public saying: string,public datePosted: Date){
        this.showDescription=false;
      }
}
