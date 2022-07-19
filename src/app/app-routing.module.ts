import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { UserProfileComponent } from './components/views/user/user-profile/user-profile.component';
import { HomeComponent } from './components/views/home/home.component';
import { EditPetComponent } from './components/views/pet/edit-pet/edit-pet.component';
import { PetProfileComponent } from './components/views/pet/pet-profile/pet-profile.component';
import { CreatePetComponent } from './components/views/pet/create-pet/create-pet.component';
import { ChatroomComponent } from './components/views/chatroom/chatroom.component';
import { AnaliticsComponent } from './components/views/admin-dash/analitics/analitics.component';
import { UserSettingsComponent } from './components/views/admin-dash/user-settings/user-settings.component';
import { PetsSettingsComponent } from './components/views/admin-dash/pets-settings/pets-settings.component';
import { SettingsComponent } from './components/views/admin-dash/settings/settings.component';
import { AdminComponent } from './components/views/admin-dash/dashboard/admin.component';
import { FavPetComponent } from './components/views/fav-pet/fav-pet.component';

const routes: Routes = [ 
  {path:'', component: HomeComponent},
  {path:'admin-dash', component:AdminComponent},
  {path:'admin-dash/analitics', component:AnaliticsComponent},
  {path:'admin-dash/users-settings', component:UserSettingsComponent},
  {path:'admin-dash/pets-settings', component:PetsSettingsComponent},
  {path:'admin-dash/settings', component:SettingsComponent},
  {path:'chat', component:ChatroomComponent},
  {path:'create-pet', component:CreatePetComponent},
  {path:'edit-pet/:id', component:EditPetComponent},
  {path:'favoritos/:id', component:FavPetComponent},
  {path:'pet-profile/:id', component:PetProfileComponent},
  {path:'user-profile/:id', component:UserProfileComponent}, 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
