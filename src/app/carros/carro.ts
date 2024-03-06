import { Marca } from "./marca";

export class Carro {
    id?:number|null;
    name?:string|null;
    model?:string|null;
    yearManufacture?:number|null;
    yearModel?:number|null;
    marca?:Marca|null;

    constructor(id?:number|null, name?:string|null, model?:string|null, yearManufacture?:number|null, yearModel?:number|null, marca?:Marca|null){
        this.id = id;
        this.name = name;
        this.model = model;
        this.yearManufacture = yearManufacture;
        this.yearModel = yearModel;
        this.marca = marca;
    }
}