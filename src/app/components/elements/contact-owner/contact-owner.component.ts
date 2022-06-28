import { Component, Input, OnInit } from '@angular/core';
import { P } from 'src/app/shared/interfaces/pets';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-owner',
  templateUrl: './contact-owner.component.html',
  styleUrls: ['./contact-owner.component.css']
})
export class ContactOwnerComponent implements OnInit {
  @Input() p:Observable<P>;
  pet:P;

  constructor
  (
    private navigate:NavigateService,
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.p.subscribe((res)=>{
      this.pet = res as P;
      console.log(this.pet);
    })
  }

  //navigate
  goToUserProfile(id:any){
    this.navigate.goToUserProfile(id);
  }
}
