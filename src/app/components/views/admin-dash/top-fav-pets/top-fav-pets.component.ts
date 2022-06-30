import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPets } from '../../../../shared/interfaces/pets';
import { IUsers } from '../../../../shared/interfaces/user';

@Component({
  selector: 'app-top-fav-pets',
  templateUrl: './top-fav-pets.component.html',
  styleUrls: ['./top-fav-pets.component.css']
})

export class TopFavPetsComponent implements OnInit{
  @Input() pets:Observable<IPets>;
  @Input() users:Observable<IUsers>;
  petsCollection:IPets;
  usersCollection:IUsers;
  petsStop:number;
  usersStop:number;
  countUsers:number = 0;
  countPets:number = 0;
  countTreatments:number = 0;
  countVacines:number = 0;

  ngOnInit(): void {
    this.data();
  }
  
  data(){
    this.pets.subscribe((res)=>{
      this.petsCollection = res as IPets;
      this.petsStop = this.petsCollection.meta;
    });

    this.users.subscribe((res)=>{
      this.usersCollection = res as IUsers;
      this.usersStop = this.usersCollection.entries;
    })
  }

  //== Counter Methods ==//
  countUsersStop:any = setInterval(()=>{
    this.countUsers++;
    if(this.countUsers == this.usersStop){
      clearInterval(this.countUsersStop);
    }
  },100);

  countPetsStop:any = setInterval(()=>{
    this.countPets++;
    if(this.countPets == this.petsStop){
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
