import { Component, Input, OnInit } from '@angular/core';
import { NavigateService } from 'src/app/shared/services/navigate.service';
import { PetViewModel } from '../../../shared/Models/petViewModel';

@Component({
  selector: 'app-contact-owner',
  templateUrl: './contact-owner.component.html',
  styleUrls: ['./contact-owner.component.css']
})
export class ContactOwnerComponent implements OnInit {
  @Input() pet:PetViewModel;
  constructor
  (
    private navigate:NavigateService,
  ) { }

  ngOnInit(): void {
  }

  //navigate

  goToUserProfile(id:number){
    this.navigate.goToUserProfile(id);
  }

}
