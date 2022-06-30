import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigateService } from '../../../shared/services/navigate.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  loggedUser:number = 1;
  constructor(private navigate:NavigateService,) { }

  ngOnInit(): void {
  }

  //navigate
  GoToHome(){
    this.navigate.GoToHome();
  }

  GoToUserProfile(){
    this.navigate.goToUserProfile(this.loggedUser);
  }

  GoToFavPets(){
    this.navigate.goToFavPets();
  }

  GoToChatroom(){
    this.navigate.goToChatroom();
  }
}
