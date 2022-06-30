export interface IUser{
  id:number;
  username:string;
  bio:string;
  email:string;
  isActive:boolean;
  role:string;
  imagePath:string;
  number:number,
  street:string;
  city:string;
  state:string;    
}

export interface UserEntries {
  $values: IUser[];
}

export interface IUsers{
  users:UserEntries;
  entries:number;
}