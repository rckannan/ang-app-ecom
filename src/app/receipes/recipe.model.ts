export  class Recipe{
   public name: string;
   public description: string;
   public imagePath: string;
   constructor(name: string, dse:string, imagepath:string){
    this.name = name;
    this.description= dse;
    this.imagePath = imagepath;

   }
}