import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';
import { NavigateService } from '../../../../shared/services/navigate.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  pets:any;
  subscription:Subscription;
  color:string='';
  sex:string;

  @ViewChild("searchAll") searchAll!:ElementRef<HTMLInputElement>;
  @ViewChild(MatAccordion) accordion: MatAccordion;

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
  data():void {
    this.service.getListPets().subscribe((pets)=>{this.pets = pets;});  
  }

  search(){
    const value = this.searchAll.nativeElement.value;
    if(value.trim() === '') return;
    this.service.search(value).subscribe((res)=>{
      this.pets = res;
    }); 
    this.searchAll.nativeElement.value='';
  }

  searchByColor(){
    if(this.color.trim() === '') return;
    const value = parseInt(this.color);
    this.service.searchColor(value).subscribe((res)=>{
      this.pets = res;
    });
  }

  searchBySex(){
    this.service.searchSex(this.sex).subscribe((res)=>{
      this.pets = res;
    });
  }

  reset(){
    this.data();
  }

  //navigate
  goToPetProfile(id:number){
    this._navigate.goToPetProfile(id);
  }

}
