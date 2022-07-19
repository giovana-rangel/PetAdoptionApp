import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { IPets } from 'src/app/shared/interfaces/pets';
import { IUsers } from 'src/app/shared/interfaces/user';
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';

@Component({
  selector: 'app-analitics',
  templateUrl: './analitics.component.html',
  styleUrls: ['./analitics.component.css']
})
export class AnaliticsComponent {
  pets:Observable<IPets> = this._service.getListPets();
  users:Observable<IUsers> = this._service.getListUsers();

  constructor(public _service:PetAdoptionAppService) { }  
}
