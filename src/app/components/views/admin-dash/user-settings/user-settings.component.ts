import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from 'src/app/shared/interfaces/user';
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  users:Observable<IUsers> = this._service.getListUsers();
  constructor(public _service:PetAdoptionAppService) { }

  ngOnInit(): void {
    
  }

}
