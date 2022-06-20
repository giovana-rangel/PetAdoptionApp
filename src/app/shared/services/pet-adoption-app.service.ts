import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { throwError, Subject, tap, Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Pet } from '../Models/pet';
import { Treatment } from '../Models/treatment';
import { Vacine } from '../Models/vacine';
import { PetViewModel } from '../Models/petViewModel';
import { FormGroup } from '@angular/forms';

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

  pets:PetViewModel[] = [];
  pet:PetViewModel = new PetViewModel();
  treatment:Treatment = new Treatment();
  vacine:Vacine = new Vacine();

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

  getListPets(){
    return this.http.get(this.baseURL + this.petEndpoint);
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
  getTreatmentsByPetId(id:number):Treatment{
    this.http.get<Treatment>(this.baseURL + this.treatmentEndpoint + '/' + id)
    .subscribe((res:any)=>{
      this.treatment.id = res.id;
      this.treatment.treatmentLabel = res.treatmentLabel;
      this.treatment.aplicationDate = res.aplicationDate;
      this.treatment.petIdFk = res.petIdFk;
    });
    return this.treatment;
  }

  postTreatment(treatment:Treatment){
    return this.http.post(this.baseURL + this.treatmentEndpoint, treatment);
  }

  // === VACINES === //
  getVacinesByPetId(id:number):Vacine{
    this.http.get<Vacine>(this.baseURL + this.vacineEndpoint + '/' + id)
    .subscribe((res:any)=>{
      this.vacine.id = res.id;
      this.vacine.vacineLabel = res.vacineLabel;
      this.vacine.aplicationDate = res.aplicationDate;
      this.vacine.petIdFk = res.petIdFk;
    });

    return this.vacine;
  }

  // === BREED === //
  getBreedList(){
    return this.http.get(this.baseURL + this.breedEndpoint);
  }
}
