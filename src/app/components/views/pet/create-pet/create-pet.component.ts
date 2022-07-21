import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PetAdoptionAppService } from '../../../../shared/services/pet-adoption-app.service';
import { Pet } from '../../../../shared/Models/pet';
import { Location } from 'src/app/shared/Models/location';
import { ILocation } from '../../../../shared/interfaces/ILocation';
import { P } from '../../../../shared/interfaces/pets';
import { NavigateService } from '../../../../shared/services/navigate.service';
import { IBreed } from '../../../../shared/interfaces/IBreed';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  // styleUrls: ['./test.component.css']
})
export class CreatePetComponent implements OnInit {
  successMsg:string;
  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    bio: new FormControl('',[Validators.required]),
    sex: new FormControl('0',[Validators.required]),
    age: new FormControl('1',[Validators.required]),
    weight: new FormControl('1',[Validators.required]),
    breed: new FormControl('1',[Validators.required]),
    color: new FormControl('1',[Validators.required]),
    country: new FormControl('Argentina',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    street: new FormControl('',[Validators.required]),
    number: new FormControl('',[Validators.required]),
    petType: new FormControl('1',[Validators.required]),
  });

  breedList:IBreed[];
  pet:Pet = new Pet();
  p:P;
  
  constructor(
    public _service:PetAdoptionAppService,
    private navigate:NavigateService
  ) { }

  ngOnInit(): void {
    this.getBreedList();
  }

  //== HTTP CALLS ==//
  getBreedList(){
    this._service.getBreedList().subscribe(res=>{this.breedList = res.$values;});
  }

  async save(){
    if(this.form.valid){
      try
      {
        await this.setPetData();
      }catch(err:any){
        console.error(err);
      }
    }else{
      this.successMsg = 'Revise los datos antes de guardar';
    }
  }

  //== METHODS ==//
  async setPetData(){
    try
    {
      this.pet.userIdFk = 1;
      this.pet.isAdopted = 0;
      this.pet.petName = this.form.get('name')?.value;
      this.pet.bio = this.form.get('bio')?.value;
      this.pet.sex = parseInt(this.form.get('sex')?.value);
      this.pet.age = parseInt(this.form.get('age')?.value);
      this.pet.petWeight = parseFloat(this.form.get('weight')?.value);
      this.pet.breedIdFk = parseInt(this.form.get('breed')?.value);
      this.pet.colorIdFk = parseInt(this.form.get('color')?.value);
      this.pet.petTypeIdFk = parseInt(this.form.get('petType')?.value);
      this.pet.country = this.form.get('country')?.value;
      this.pet.state = this.form.get('state')?.value;
      this.pet.city = this.form.get('city')?.value;
      this.pet.street = this.form.get('street')?.value;
      this.pet.number = parseInt(this.form.get('number')?.value);

      await this._service.postPet(this.pet).subscribe((res)=>{
        this.p = res as P;
        this.navigate.GoToPetProfile(this.p.id);
      });
    }catch(err){
      console.log(err);
    } 
  }

  //=== GETTERS ==//
  get name(){return this.form.get('name');}
  get bio(){return this.form.get('bio');}
  get sex(){return this.form.get('sex');}
  get age(){return this.form.get('age');}
  get weight(){return this.form.get('weight');}
  get breed(){return this.form.get('breed');}
  get petType(){return this.form.get('petType');}
  get color(){return this.form.get('color');}
 
  get country(){return this.form.get('country');}
  get state(){return this.form.get('state');}
  get city(){return this.form.get('city');}
  get street(){return this.form.get('street');}
  get number(){return this.form.get('number');}
  
}
