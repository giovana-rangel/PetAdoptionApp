export interface IVacine {
  id:number;
  vacineLabel:string;
  aplicationPlace:string;
  aplicationDate:string;
  petIdFk:number;
}

export interface IVacines {
  $values:IVacine[];
}