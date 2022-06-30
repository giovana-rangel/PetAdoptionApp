export interface ITreats {
  $values:string[];
}

export interface IVacines {
  $values:string[];
}

export interface IHealthEntries {
  id?:number;
  petName?:string;
  bio?:string;
  petType?:string;
  userIdFk?:number;
  treatments:ITreats;
  vacines:IVacines;
}

export interface IHealth {
  $values: IHealthEntries[];
}

