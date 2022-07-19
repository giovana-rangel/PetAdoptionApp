import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';
import { NavigateService } from '../../../../shared/services/navigate.service';
import { FormControl, FormGroup } from '@angular/forms';
import { P } from 'src/app/shared/interfaces/pets';
import { IFavs, IFav } from '../../../../shared/interfaces/favpets';
import { FavPet } from 'src/app/shared/Models/favPet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})

export class PetsComponent implements OnInit {
  subscription:Subscription;
  userLogged:number = 1;
  showFilters = true;

  Data:P[];
  dataSource:P[];

  form = new FormGroup({
    raza:new FormControl(''),
    color:new FormControl(0),
    sex:new FormControl(''),
    type:new FormControl('')
  })
  
  constructor
  ( 
    public service:PetAdoptionAppService,
    private _navigate:NavigateService,
  ) { }

  ngOnInit() {
    this.data();
    this.subscription = this.service.refresh.subscribe(() => {
      this.data();
    });
  }

  //service calls
  data(){
    this.service.getListPets().subscribe((res)=>{
      this.Data = res.pets.$values as P[];
      this.dataSource = this.Data;
      this.dataSource = this.dataSource.filter(p => p.petType === "gato");
    });
  }

  onSave(petId:number){
    let favpet = new FavPet();
    favpet.petIdFk = petId;
    favpet.userIdFk = this.userLogged;
    this.service.postFavPet(favpet);
  }

  reset(){
    this.data();
  }

  show(){
    if(this.showFilters){
      this.showFilters=false;
    }else{
      this.showFilters=true;
    }
  }

  filters(){
    this.dataSource = this.Data;
    let raza = this.form.get('raza')?.value;
    let color = parseInt(this.form.get('color')?.value);
    let sex = this.form.get('sex')?.value;
    let type = this.form.get('type')?.value;

    if(raza.trim() != ''){
      this.dataSource = this.dataSource.filter(p => p.breed === raza);
    }
    if(color != NaN && color !== 0){
      this.dataSource = this.dataSource.filter(p => p.color === color);
    }
    if(sex.trim() != ''){
      var flag = (sex === 'true');
      this.dataSource = this.dataSource.filter(p => p.sex === flag);
    }
    if(type.trim() != ''){
      this.dataSource = this.dataSource.filter(p => p.petType === type);
    }
  }

  //=== GETERS ===//
  get raza(){return this.form.get('raza');}
  get color(){return this.form.get('color');}
  get sex(){return this.form.get('sex');}
  get type(){return this.form.get('type');}

  //navigate
  goToPetProfile(id:any){
    this._navigate.GoToPetProfile(id);
  }
}
