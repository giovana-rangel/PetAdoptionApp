import { Component, OnInit, ViewChild } from '@angular/core';
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showFiller = false;
  pets!:any;
  showSideNav:boolean = false;

  constructor(public service:PetAdoptionAppService) { }

  ngOnInit() {
    this.data();
  }

  data():void {
    this.service.getListPets().subscribe((res:any)=>{
      this.pets = res;
      console.log(this.pets);
    });  
  }
}
