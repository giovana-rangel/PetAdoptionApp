import { Component, } from '@angular/core';

@Component({
  selector: 'app-top-fav-pets',
  templateUrl: './top-fav-pets.component.html',
  styleUrls: ['./top-fav-pets.component.css']
})

export class TopFavPetsComponent {
  countUsers:number = 0;
  countPets:number = 0;
  countTreatments:number = 0;
  countVacines:number = 0;

  countUsersStop:any = setInterval(()=>{
    this.countUsers++;
    if(this.countUsers == 3){
      clearInterval(this.countUsersStop);
    }
  },100);

  countPetsStop:any = setInterval(()=>{
    this.countPets++;
    if(this.countPets == 44){
      clearInterval(this.countPetsStop);
    }
  },100);

  countTreatmentsStop:any = setInterval(()=>{
    this.countTreatments++;
    if(this.countTreatments == 4){
      clearInterval(this.countTreatmentsStop);
    }
  },100);

  countVacinesStop:any = setInterval(()=>{
    this.countVacines++;
    if(this.countVacines == 1){
      clearInterval(this.countVacinesStop);
    }
  },100);
}
