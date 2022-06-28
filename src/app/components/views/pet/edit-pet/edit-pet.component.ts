import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pet } from 'src/app/shared/Models/pet';
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';
import { UtilsService } from '../../../../shared/services/utils.service';
import { PetViewModel } from '../../../../shared/Models/petViewModel';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})

export class EditPetComponent implements OnInit {
  id:number = Number(this.activatedRoute.snapshot.paramMap.get('id'));;

  form = new FormGroup({
    name: new FormControl('',[Validators.required]),
    bio: new FormControl('',[Validators.maxLength(250)]),
    sex: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
    weight: new FormControl('',[Validators.required]),
    breed: new FormControl('',[Validators.required]),
    color: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    petType: new FormControl('',[Validators.required]),
    isAdopted: new FormControl('0',[Validators.required]),
    treatmentLabel: new FormControl('',[Validators.required]),
    treatmentDate: new FormControl('',[Validators.required]),
  });

  fv = new FormGroup({
    label: new FormControl('',[Validators.required]),
    place: new FormControl('',[Validators.required]),
    date: new FormControl('',[Validators.required])
  });

  
  petVM:PetViewModel = new PetViewModel();
  pet:Pet = new Pet();
  breedList:any;
  Msg:string;

  constructor
  (
    public service:PetAdoptionAppService,
    public _utils:UtilsService,
    private activatedRoute:ActivatedRoute,
  ) 
  { }

  ngOnInit(): void {
    this.getBreedList();
    this.getPet();
    // this.getTreatments();
  }

  getPet():void {
    this.petVM = this.service.getPet(this.id);
  }

  getBreedList(){
    this.service.getBreedList().subscribe(res=>{
      this.breedList = res;
      console.log(this.breedList);
    });
  }

  // getTreatments(){
  //   this.treatments = this.service.getTreatmentsByPetId(this.id);
  // }

  // getVacines(){
  //   this.vacines = this.service.getVacinesByPetId(this.id);
  // }

  save(){
    try{
      this.setPetData();
      this.service.updatePet(this.pet, this.id);
      this.Msg = 'Guardado exitosamente';
    }catch(err){
      this.Msg = 'Algo salió mal...';
    }
  }

  setPetData(){
    this.pet.id = this.id;
    this.pet.userIdFk = 1;
    this.pet.locationIdFk = 1;
    this.pet.imageIdFk = null;
    this.pet.petName = this.form.get('name')?.value;
    this.pet.bio = this.form.get('bio')?.value;
    this.pet.sex = parseInt(this.form.get('sex')?.value);
    this.pet.age = parseInt(this.form.get('age')?.value);
    this.pet.isAdopted= parseInt(this.form.get('isAdopted')?.value);
    this.pet.petWeight = parseFloat(this.form.get('weight')?.value);
    this.pet.breedIdFk = parseInt(this.form.get('breed')?.value);
    this.pet.colorIdFk = parseInt(this.form.get('color')?.value);;
    this.pet.petTypeIdFk = parseInt(this.form.get('petType')?.value);
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

  get color(){
    return this.form.get('color');
  }

  get location(){
    return this.form.get('location');
  }

  get petType(){
    return this.form.get('petType');
  }

  get isAdopted(){
    return this.form.get('isAdopted');
  }
}
