import { Component } from '@angular/core';
import { PetAdoptionAppService } from '../../../shared/services/pet-adoption-app.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PetEntries } from 'src/app/shared/interfaces/pets';

@Component({
  selector: 'app-fav-pet',
  templateUrl: './fav-pet.component.html',
  styleUrls: ['./fav-pet.component.css']
})
export class FavPetComponent {
  id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  pets:Observable<PetEntries>=this.service.getFavPets(this.id);
  
  constructor
  (
    private service: PetAdoptionAppService,
    private activatedRoute:ActivatedRoute,
  ) { }
}
