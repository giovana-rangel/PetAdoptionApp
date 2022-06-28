import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, tap, Observable } from 'rxjs';

//models
import { Pet } from '../Models/pet';
import { PetViewModel } from '../Models/petViewModel';
import { FavPet } from '../Models/favPet';
import { Treatment } from '../Models/treatment';

//interfaces
import { ITreatments } from '../interfaces/treatment';
import { PetEntries, P } from '../interfaces/pets';
import { IVacines } from '../interfaces/vacine';
import { Vacine } from '../Models/vacine';


@Injectable({
  providedIn: 'root'
})

export class PetAdoptionAppService {

  constructor(private http:HttpClient) { }

  private _refresh$ = new Subject<void>();
  readonly baseURL: string = 'https://localhost:44392/PetApi';
  readonly userEndpoint:string = "/UserClient";
  readonly petEndpoint:string = "/Pet";
  readonly treatmentEndpoint:string = "/Treatment";
  readonly vacineEndpoint:string = "/Vacine";
  readonly LocationEndpoint:string = "/LocationAderess";
  readonly breedEndpoint:string = "/Breed";
  readonly favPetEndpoint:string = "/FavPet";

  pets:PetViewModel[] = [];
  pet:PetViewModel = new PetViewModel();
  p:P;

  get refresh(){
    return this._refresh$;
  }

  
  // === USERS === //
  getUser(id:number){ 
    return this.http.get(this.baseURL + this.userEndpoint + '/' + id);
  }

  getListUsers(){
    return this.http.get(this.baseURL + this.userEndpoint);
  }

  deleteUserClient(id:number){
    return this.http.delete(`${this.baseURL}${this.userEndpoint}/${id}`)
      .pipe(
        tap(()=>{
          this._refresh$.next();
        })
      );
  }

  // === PETS === //

  getPet(id:number):PetViewModel{
    this.http.get<PetViewModel>(this.baseURL + this.petEndpoint + '/' + id)
    .subscribe((res:any)=>{
      this.pet.id = res.id;
      this.pet.name = res.name;
      this.pet.bio = res.bio;
      this.pet.breed = res.breed;
      this.pet.sex = res.sex;
      this.pet.age = res.age;
      this.pet.weight = res.weight;
      this.pet.is_adopted = res.is_adopted;
      this.pet.petType = res.petType;
      this.pet.username = res.username;
      this.pet.userId = res.userId;
      this.pet.number = res.number;
      this.pet.street = res.street;
      this.pet.city = res.city;
      this.pet.state = res.state;
    });

    return this.pet;
  }

  getPetData(id:number):Observable<P>{
    return this.http.get<P>(this.baseURL + this.petEndpoint + '/' + id);
  }

  getListPets(){
    return this.http.get(this.baseURL + this.petEndpoint);
  }

  getListPets2():Observable<PetEntries>{
    return this.http.get<PetEntries>(this.baseURL + this.petEndpoint);
  }

  getPetFullData(){
    return this.http.get(this.baseURL + this.petEndpoint + '/healthData');
  }

  search(value:string){
    value.toLowerCase();
    return this.http.get(`https://localhost:44392/PetApi/Pet/search?value=${value}`);
  }

  searchColor(value:number){
    return this.http.get(`https://localhost:44392/PetApi/Pet/color?value=${value}`);
  }

  searchSex(value:string){
    return this.http.get(`https://localhost:44392/PetApi/Pet/sex?value=${value}`);
  }

  PetCreationsByMonth(){
    return this.http.get( this.baseURL + this.petEndpoint + '/date?');
  }

  postPet(pet:Pet){
    return this.http.post(this.baseURL + this.petEndpoint, pet)
    .subscribe((res)=>{console.log(res)}); 
  }

  updatePet(pet:Pet, id:number){
    return this.http.put(this.baseURL + this.petEndpoint + '/' + id, pet)
    .subscribe();
  }

  deletePet(id:number){
    return this.http.delete(`${this.baseURL}${this.petEndpoint}/${id}`)
      .pipe(
        tap(()=>{
          this._refresh$.next();
        })
      );
  }

  
  // === TREATMENTS === //
  getTreatmentsByPetId(id:number):Observable<ITreatments>{
    return this.http.get<ITreatments>(this.baseURL + this.treatmentEndpoint + '/petTreatment?petId=' + id);
  }

  postTreatment(treatment:Treatment){
    return this.http.post(this.baseURL + this.treatmentEndpoint, treatment)
    .subscribe((res)=>{console.log(res)});
  }

  // === VACINES === //
  getVacinesByPetId(id:number):Observable<IVacines>{
    return this.http.get<IVacines>(this.baseURL + this.vacineEndpoint + '/' + id);
  }

  postVacine(vacine:Vacine){
    return this.http.post(this.baseURL + this.vacineEndpoint, vacine)
    .subscribe((res)=>{console.log(res)});
  }

  // === BREED === //
  getBreedList(){
    return this.http.get(this.baseURL + this.breedEndpoint);
  }

  // === Fav Pet === //
  postFavPet(favPet:FavPet){
    return this.http.post(this.baseURL + this.favPetEndpoint, favPet);
  }
}
