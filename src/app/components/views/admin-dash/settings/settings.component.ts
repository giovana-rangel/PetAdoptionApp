import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';

import { IColors } from 'src/app/shared/interfaces/IColor';
import { PetAdoptionAppService } from '../../../../shared/services/pet-adoption-app.service';
import { Color } from 'src/app/shared/Models/color';
import { IBreeds } from '../../../../shared/interfaces/IBreed';
import { Breed } from '../../../../shared/Models/breed';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  colorCtrl = new FormControl('');
  breedCtrl = new FormControl('');
  // filteredColors: Observable<string[]>;
  colors:IColors;
  color:Color = new Color();
  breeds:IBreeds;
  breed:Breed = new Breed();

  @ViewChild('colorInput') colorInput: ElementRef<HTMLInputElement>;
  @ViewChild('breedInput') breedInput: ElementRef<HTMLInputElement>;

  constructor(private service:PetAdoptionAppService) { }

  ngOnInit(): void {
    this.data();
  }

  data(){
    this.service.getColors().subscribe((res)=>{this.colors = res as IColors;});
    this.service.getBreedList().subscribe((res)=>{this.breeds = res as IBreeds})
  }

  onDelete(obj:string, id:number){
    if(obj === 'color'){
      this.service.deleteColor(id);
    }else if(obj === 'breed'){
      this.service.deleteBreed(id);
    }
  }

  postColor(){
    if(this.colorCtrl.value.trim() === '') return;
    this.color.color1 = this.colorCtrl.value;
    this.service.postColor(this.color);
    this.colorInput.nativeElement.value='';
  }

  postBreed(petType:number){
    if(this.breedCtrl.value.trim() === '') return;

    this.breed.breed = this.colorCtrl.value;
    
    if(petType == 1){
      //set petType as cat
      this.breed.petType = 1;
    }else{
      //set petType as dog
      this.breed.petType = 2;
    }

    this.service.postBreed(this.breed);
    this.breedInput.nativeElement.value='';
  }
}
