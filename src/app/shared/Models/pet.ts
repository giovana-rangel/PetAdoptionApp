export class Pet {
  id:number=0;
  petName:string='';
  bio:string='';
  sex:number=0;
  age:number=0;
  petWeight:number=1;
  isAdopted:number=0;
  petTypeIdFk:number=1;
  colorIdFk:number=1;
  breedIdFk:number=1;
  userIdFk:number=0;
  imageIdFk:any=null;
  locationIdFk:number=0;
}
