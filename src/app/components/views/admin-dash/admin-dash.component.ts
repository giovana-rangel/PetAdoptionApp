import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';
import { IPets } from '../../../shared/interfaces/pets';
import { IUsers } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  pets:Observable<IPets> = this._service.getListPets();
  users:Observable<IUsers> = this._service.getListUsers();
  
  constructor(public _service:PetAdoptionAppService,) { }

  ngOnInit(): void {
  }
}
