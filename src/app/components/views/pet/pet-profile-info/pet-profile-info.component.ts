import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetViewModel } from 'src/app/shared/Models/petViewModel';

import { Treatment } from 'src/app/shared/Models/treatment';
import { Vacine } from 'src/app/shared/Models/vacine';
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';
import { NavigateService } from '../../../../shared/services/navigate.service';

@Component({
  selector: 'app-pet-profile-info',
  templateUrl: './pet-profile-info.component.html',
  styleUrls: ['./pet-profile-info.component.css']
})
export class PetProfileInfoComponent implements OnInit {
  id:number;
  pet:any;
 
  //http calls response
  treatments:any;
  vacines:any;
  //ngForms values
  treatmentLabel:string='';
  treatmentDate:any='';

  vacineLabel:string=''
  vacinePlaceAplication:string='';
  vacineDate:string='';
  
  treatment:Treatment;
  vacine:Vacine = new Vacine();
  
  constructor
  (
    public service:PetAdoptionAppService,
    private activatedRoute:ActivatedRoute,
    private _navigate:NavigateService,
  ) { }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getPet();
    this.getTreatments();
    this.getVacines();
  }

  //service calls
  
  saveTreatment(petId:number){
    if(petId != null){
      this.treatment.treatmentLabel = this.treatmentLabel;
      this.treatment.aplicationDate = this.treatmentDate;
      this.treatment.petIdFk = petId;

      this.service.postTreatment(this.treatment).subscribe(data =>{console.log(data);});
    }
    return;
  }

  saveVacine(petId:number){
    if(petId != null){
      this.vacine.vacineLabel = this.vacineLabel;
      this.vacine.aplicationDate = this.vacineDate;
      this.vacine.aplicationPlace = this.vacinePlaceAplication;
      this.vacine.petIdFk = petId;

      console.log(this.treatment);
    }
    return;
  }

  getPet():void {
    this.pet = this.service.getPet(this.id);
  }

  getTreatments(){
    this.treatment = this.service.getTreatmentsByPetId(this.id);
  }

  getVacines(){
    this.vacines = this.service.getVacinesByPetId(this.id);
  }

  //navigate

  goToEditPet(id:number){
    this._navigate.goToEditPet(id);
  }
}
