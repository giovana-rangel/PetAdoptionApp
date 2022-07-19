export interface P {
  id:number;
  name:string;
  bio:string;
  breed:string;
  color:number;
  sex:boolean;
  age:number;
  weight:number;
  is_adopted:boolean;
  petType:string;
  username:string;
  userId:number;
  number:number;
  street:string;
  city:string;
  state:string;
  country:string;
  locationId:number;
}

export interface PetEntries {
  $values: P[];
}

export interface IPets{
  pets:PetEntries;
  meta:number;
}