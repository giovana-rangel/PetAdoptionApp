import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private router:Router) { }

  //=== Home ===//
  GoToHome(){this.router.navigate([`/`]);}
  

  //=== User ===//
  GoToUserProfile(id:number){this.router.navigate([`/user-profile/${id}`]);}

  GoToCreateUser(id:number){this.router.navigate([`/create-user`]);}

  GoToEditUser(id:number){this.router.navigate([`/edit-user/${id}`]);}


  //=== Pet ===//

  GoToPetProfile(id:number){this.router.navigate([`/pet-profile/${id}`]);}

  GoToCreatePet(){this.router.navigate([`/create-pet`]);}

  GoToEditPet(id:number){this.router.navigate([`/edit-pet/${id}`]);}


  //=== Favoritos ===//
  GoToFavPets(userId:number){this.router.navigate([`favoritos/${userId}`]);}


  //=== ChatRoom ===//
  GoToChatroom(){this.router.navigate(['chat']);}

  
  //=== Admin Dash===//
  GoToAdminAnalitics(){this.router.navigate(['admin-dash/analitics']);}
  
  GoToAdminPets(){this.router.navigate(['admin-dash/pets-settings']);}
  
  GoToAdminUsers(){this.router.navigate(['admin-dash/users-settings']);}
  
  GoToAdminSettings(){this.router.navigate(['admin-dash/settings']);}
}
