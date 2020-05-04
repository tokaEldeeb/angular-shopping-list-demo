import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    public name:string;
    public description : string;
    public imagePath :string;
    public id:number;
    public Ingredints : Ingredient[];

    constructor(name:string,desc:string,image:string,ings :Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imagePath = image;
        this.Ingredints = ings;
    }
}