export interface IBreed {
  id:number;
  breed1:string;
  petTypeIdFk:number;
}

export interface IBreeds {
  $values:IBreed[];
}