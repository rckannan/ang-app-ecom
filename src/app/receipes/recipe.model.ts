import { Inherident } from '../shared/inherident.model';

export class Recipe {
  public id : number;
  public name : string;
  public description : string;
  public imagePath : string;
  public inheridents : Inherident[];
  constructor(
    id: number,
    name  : string,
    dse : string,
    imagepath : string,
    inheridents : Inherident[]
  ) {
    this.id = id;
    this.name = name;
    this.description = dse;
    this.imagePath = imagepath;
    this.inheridents = inheridents;
  }
}
