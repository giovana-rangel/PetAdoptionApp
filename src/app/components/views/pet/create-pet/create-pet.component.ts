import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PetAdoptionAppService } from '../../../../shared/services/pet-adoption-app.service';
import { Pet } from '../../../../shared/Models/pet';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  // styleUrls: ['./test.component.css']
})
export class CreatePetComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    bio: new FormControl('',[Validators.required]),
    sex: new FormControl('0',[Validators.required]),
    age: new FormControl('1',[Validators.required]),
    weight: new FormControl('1',[Validators.required]),
    breed: new FormControl('1',[Validators.required]),
    color: new FormControl('1',[Validators.required]),
    location: new FormControl('1',[Validators.required]),
    petType: new FormControl('1',[Validators.required]),
  });

  pet:Pet = new Pet();
  breedList:any;
  successMsg:string = '';

  constructor(public _service:PetAdoptionAppService) { }

  ngOnInit(): void {
    this.getBreedList();
  }

  getBreedList(){
    this._service.getBreedList().subscribe(res=>{
      this.breedList = res;
      console.log(this.breedList);
    });
  }

  save(){
    if(!this.form.invalid){
      try
      {
        this.setData(this.form);
        this._service.postPet(this.pet);
        this.successMsg = 'Guardado exitosamente';
      }catch(err:any){
        console.error(err);
      }
      
    }else{
      console.log('form invalid');
    }
    
  }

  setData(form:FormGroup){
    this.pet.id = 0;
    this.pet.userIdFk = 1;
    this.pet.isAdopted = 0;
    this.pet.locationIdFk = parseInt(form.get('location')?.value);
    this.pet.petName = form.get('name')?.value;
    this.pet.bio = form.get('bio')?.value;
    this.pet.sex = parseInt(form.get('sex')?.value);
    this.pet.age = parseInt(form.get('age')?.value);
    this.pet.petWeight = parseFloat(form.get('weight')?.value);
    this.pet.breedIdFk = parseInt(form.get('breed')?.value);
    this.pet.colorIdFk = parseInt(form.get('color')?.value);
    this.pet.petTypeIdFk = parseInt(form.get('petType')?.value);
  }

  clearFields(){
    //pendiente
  }

  getLocation(){
    //recortar string location y guardar en los respectivos campos
  }

  get name(){
    return this.form.get('name');
  }

  get bio(){
    return this.form.get('bio');
  }

  get sex(){
    return this.form.get('sex');
  }

  get age(){
    return this.form.get('age');
  }

  get weight(){
    return this.form.get('weight');
  }

  get breed(){
    return this.form.get('breed');
  }

  get location(){
    return this.form.get('location');
  }

  get petType(){
    return this.form.get('petType');
  }

  get color(){
    return this.form.get('color');
  }
}
