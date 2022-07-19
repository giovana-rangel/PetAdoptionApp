import { Component, Input, OnInit } from '@angular/core';
import { PetEntries } from '../../../../shared/interfaces/pets';
import { Observable } from 'rxjs';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() pets:Observable<PetEntries>;
  petsList:PetEntries;
  
  constructor(private navigate:NavigateService) { }

  ngOnInit(): void {
    this.data();
  }

  data(){
    this.pets.subscribe((res)=>{
      this.petsList = res as PetEntries;
      console.log(this.pets);
    })
  }

  //navigate
  goToPetProfile(id:any){
    this.navigate.GoToPetProfile(id);
  }
}
