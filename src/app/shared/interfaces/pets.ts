export interface P {
  id?:number;
  name?:string;
  bio?:string;
  breed?:string;
  color?:number;
  sex?:number;
  age?:number;
  weight?:number;
  is_adopted?:boolean;
  petType?:string;
  username?:string;
  userId?:number;
  number?:number;
  street?:string;
  city?:string;
  state?:string;
}

export interface PetEntries {
  $values: P[];
}