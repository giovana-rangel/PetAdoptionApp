import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

//== Services ==//
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';
//== Models and Interfaces ==//
import { Pet } from 'src/app/shared/Models/pet';
import { PetViewModel } from '../../../../shared/Models/petViewModel';
import { Location } from 'src/app/shared/Models/location';
import { P } from '../../../../shared/interfaces/pets';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.css']
})

export class EditPetComponent implements OnInit {
  id:number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  location = new Location();
  petVM = new PetViewModel();
  form = new FormGroup({
    name: new FormControl(this.petVM.name,[Validators.required]),
    bio: new FormControl('',[Validators.maxLength(250)]),
    sex: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
    weight: new FormControl('',[Validators.required]),
    breed: new FormControl('',[Validators.required]),
    color: new FormControl('',[Validators.required]),
    country: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required]),
    street: new FormControl('',[Validators.required]),
    number: new FormControl('',[Validators.required]),
    petType: new FormControl('',[Validators.required]),
    isAdopted: new FormControl('0',[Validators.required]),
  });

  pet:Pet = new Pet();
  breedList:any;
  successMsg:string='';
  errorMsg:string='';

  constructor
  (
    public service:PetAdoptionAppService,
    private activatedRoute:ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.getBreedList();
    this.getPet();
  }

  //== SERVICE CALLS ==//
  getPet() {
    this.petVM = this.service.getPet(this.id);
  }

  getBreedList(){
    this.service.getBreedList().subscribe(res=>{
      this.breedList = res;
      console.log(this.breedList);
    });
  }

  save(){
    try{
      if(this.form.valid){
        this.setPetData();
        this.setLocationData();
        this.successMsg = 'Guardado exitosamente';
        window.location.reload()
      }
    }catch(err){
      this.errorMsg = 'Algo salió mal...';
    }
  }

  //== METHODS ==//
  setPetData(){
    this.pet.id = this.id;
    this.pet.userIdFk = 1;
    this.pet.locationIdFk = this.petVM.locationId;
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

    this.service.updatePet(this.pet, this.id);
  }

  setLocationData(){
    this.location.id = this.petVM.locationId;
    this.location.country = this.form.get('country')?.value;
    this.location.state = this.form.get('state')?.value;
    this.location.city = this.form.get('city')?.value;
    this.location.street = this.form.get('street')?.value;
    this.location.number = parseInt(this.form.get('number')?.value);

    this.service.updateLocation(this.location, this.petVM.locationId);
  }

  //== GETTERS ==//
  get name(){return this.form.get('name');}
  get bio(){return this.form.get('bio');}
  get sex(){return this.form.get('sex');}
  get age(){return this.form.get('age');}
  get weight(){return this.form.get('weight');}
  get breed(){return this.form.get('breed');}
  get color(){return this.form.get('color');}
  get country(){return this.form.get('country');}
  get state(){return this.form.get('state');}
  get city(){return this.form.get('city');}
  get street(){return this.form.get('street');}
  get number(){return this.form.get('number');}
  get petType(){return this.form.get('petType');}
  get isAdopted(){return this.form.get('isAdopted');}
}
