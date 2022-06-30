import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private router:Router) { }

  //=== Home ===//
  GoToHome(){
    this.router.navigate([`/`]);
  }
  
  //=== User ===//
  goToUserProfile(id:number){
    this.router.navigate([`/user-profile/${id}`]);
  }

  goToCreateUser(id:number){
    this.router.navigate([`/create-user`]);
  }

  goToEditUser(id:number){
    this.router.navigate([`/edit-user/${id}`]);
  }

  //=== Pet ===//

  goToPetProfile(id:number){
    this.router.navigate([`/pet-profile/${id}`]);
  }

  goToCreatePet(){
    this.router.navigate([`/create-pet`]);
  }

  goToEditPet(id:number){
    this.router.navigate([`/edit-pet/${id}`]);
  }

  //=== Favoritos ===//
  goToFavPets(){
    this.router.navigate(['favoritos']);
  }

  //=== ChatRoom ===//
  goToChatroom(){
    this.router.navigate(['chat']);
  }
}
