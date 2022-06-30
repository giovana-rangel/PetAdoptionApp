import { Component, OnInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';
import { NavigateService } from '../../../../shared/services/navigate.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IPets, PetEntries } from 'src/app/shared/interfaces/pets';
import { FavPet } from '../../../../shared/Models/favPet';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})

export class PetsComponent implements OnInit {
  userLogged:number = 1;

  totalEntries:number;
  load:number=6;
  dataSource:IPets;
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
  data(){
    this.service.getPets(this.load).subscribe((res)=>{
      this.dataSource = res as IPets;
      this.totalEntries = this.dataSource.meta;
      console.log(this.dataSource);
    });
  }

  LoadMore(){
    if(this.load >= this.totalEntries){
      this.service.getPets(this.totalEntries);
    }else{
      this.load = this.load+6;
      this.data();
    }
  }

  //== Filter Methods ==//
  search(){
    const value = this.searchAll.nativeElement.value;
    if(value.trim() === '') return;
    this.service.search(value).subscribe((res)=>{
      this.dataSource = res as IPets;
    }); 
    this.searchAll.nativeElement.value='';
  }

  searchByColor(){
    if(this.color.trim() === '') return;
    const value = parseInt(this.color);
    this.service.searchColor(value).subscribe((res)=>{
      this.dataSource = res as IPets;
    });
  }

  searchBySex(){
    this.service.searchSex(this.sex).subscribe((res)=>{
      this.dataSource = res as IPets;
    });
  }

  reset(){
    this.data();
  }

  //navigate
  goToPetProfile(id:any){
    this._navigate.goToPetProfile(id);
  }
}
