import { Inherident } from '../shared/inherident.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public inheridents: Inherident[];
  constructor(
    name: string,
    dse: string,
    imagepath: string,
    inheridents: Inherident[]
  ) {
    this.name = name;
    this.description = dse;
    this.imagePath = imagepath;
    this.inheridents = inheridents;
  }
}
