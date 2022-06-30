import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

//services
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';
import { NavigateService } from '../../../../shared/services/navigate.service';

// Models and interfaces
import { ITreatments } from 'src/app/shared/interfaces/treatment';
import { IVacines } from 'src/app/shared/interfaces/vacine';
import { P } from 'src/app/shared/interfaces/pets';
import { Treatment} from 'src/app/shared/Models/treatment';
import { Vacine } from '../../../../shared/Models/vacine';

@Component({
  selector: 'app-pet-profile-info',
  templateUrl: './pet-profile-info.component.html',
  styleUrls: ['./pet-profile-info.component.css']
})

export class PetProfileInfoComponent implements OnInit {
  @ViewChild('mapsUrl') mapsUrl: ElementRef;
  url:string;

  pet:P;
  treatments:ITreatments;
  vacines:IVacines;
  petId:number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  p:Observable<P> = this.service.getPetData(this.petId); 
  
  tForm = new FormGroup({
    treatmentLabel: new FormControl('',[Validators.required]),
    treatmentDate: new FormControl('',[Validators.required]),
  });

  vForm = new FormGroup({
    vacineLabel: new FormControl('',[Validators.required]),
    vacineDate: new FormControl('',[Validators.required]),
    vacinePlace: new FormControl('',[Validators.required]),
  });
  
  constructor
  (
    public service:PetAdoptionAppService,
    private activatedRoute:ActivatedRoute,
    private _navigate:NavigateService,
  ) { }

  ngOnInit(): void {
    this.petId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getPetData();
    this.getTreatmentsByPetId()
    this.getVacinesByPetId();
  }

  //== SERVICE CALLS ==//
  getPetData(){
    this.service.getPetData(this.petId).subscribe((res)=>{
      this.pet = res as P;
    });
  }
  
  getTreatmentsByPetId(){
    this.service.getTreatmentsByPetId(this.petId).subscribe((res)=>{
      this.treatments = res as ITreatments;  
    })
  }
  
  getVacinesByPetId(){
    this.service.getVacinesByPetId(this.petId).subscribe((res)=>{
      this.vacines = res as IVacines;
    })
  }

  saveTreatment(){
    if(this.petId != 0){
      
      let t = new Treatment();
      t.petIdFk = this.petId;
      t.treatmentLabel = this.tForm.get('treatmentLabel')?.value;
      t.aplicationDate = this.tForm.get('treatmentDate')?.value;
      try{
        this.service.postTreatment(t); 
      }catch(err){
        console.error(err);
      }     
    }else{
      return;
    }
  }

  saveVacine(){
    if(this.petId != null){
      if(!this.vForm.invalid){
        let v = new Vacine();
        v.petIdFk = this.petId;
        v.vacineLabel = this.vForm.get('vacineLabel')?.value;
        v.aplicationDate = this.vForm.get('vacineDate')?.value;
        v.aplicationPlace = this.vForm.get('vacinePlace')?.value;

        try{
          this.service.postVacine(v);
        }catch(err){
          console.error(err);
        } 
      }   
    }
    return;
  }

  onDelete(id:number, model:string){
    if(model == 't'){
      console.log(id);
      this.service.deleteTreatment(id);
    }else if (model == 'v') {
      console.log(id);
      this.service.deleteVacine(id);
    }
  }

  //== METHODS ==//
  setGoogleMapsURL(){
    let text = this.mapsUrl.nativeElement.textContent;
    let arr = text.split(" ");
    this.url = arr.join("+");
  }

 //== NAVIGATE ==//
  goToEditPet(){
    this._navigate.goToEditPet(this.petId);
  }

  // == GETTERS ==//
  get treatmentLabel(){return this.tForm.get('treatmentLabel');}
  get treatmentDate(){return this.tForm.get('treatmentDate');}
  get vacineLabel(){return this.vForm.get('vacineLabel');}
  get vacineDate(){return this.vForm.get('vacineDate');}
  get vacinePlace(){return this.vForm.get('vacinePlace');}
}
