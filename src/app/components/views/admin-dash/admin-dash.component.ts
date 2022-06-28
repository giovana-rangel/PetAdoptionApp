import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';
import { Pet } from '../../../shared/Models/pet';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  pets:any;
  subscription:Subscription;
  constructor(public _service:PetAdoptionAppService,) { }

  ngOnInit(): void {
    this.data();
    this.subscription = this._service.refresh.subscribe(() => {
      this.data();
    });
  }

  data():void {
    this._service.getListPets().subscribe((res:any)=>{ this.pets = res;});
  }
}
