export class FavPet {
  id:number=0;
  userIdFk:number=0;
  petIdFk:number=0;
}

export class FavPetByUser{
  favPets: FavPet[];
}