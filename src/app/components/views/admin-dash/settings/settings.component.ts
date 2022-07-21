import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IColors } from 'src/app/shared/interfaces/IColor';
import { PetAdoptionAppService } from '../../../../shared/services/pet-adoption-app.service';
import { Color } from 'src/app/shared/Models/color';
import { IBreeds } from '../../../../shared/interfaces/IBreed';
import { Breed } from '../../../../shared/Models/breed';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  subscription:Subscription;
  colorCtrl = new FormControl('');
  breedCtrl = new FormControl('');
  breedCtrl2 = new FormControl('');

  colors:IColors;
  color:Color = new Color();
  breeds:IBreeds;
  breed:Breed = new Breed();

  @ViewChild('colorInput') colorInput: ElementRef<HTMLInputElement>;
  @ViewChild('breedInput') breedInput: ElementRef<HTMLInputElement>;
  @ViewChild('breedInput2') breedInput2: ElementRef<HTMLInputElement>;

  constructor(private service:PetAdoptionAppService) { }

  ngOnInit(): void {
    this.data();
    this.subscription = this.service.refresh.subscribe(() => {
      this.data();
    });
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
    this.data();
  }

  postBreed(petType:number){
    this.breed.id=0;
    if(petType == 1){
      //set petType as cat
      if(this.breedCtrl.value.trim() === '')return;
      this.breed.breed1 = this.breedCtrl.value;
      this.breed.petTypeIdFk = 1;
    }else{
      //set petType as dog
      if(this.breedCtrl2.value.trim() === '') return;
      this.breed.breed1 = this.breedCtrl2.value;
      this.breed.petTypeIdFk = 2; 
    }

    this.service.postBreed(this.breed);
    this.breedInput.nativeElement.value='';
    this.data();
  }
}
