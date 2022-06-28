import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AdminDashComponent } from './components/views/admin-dash/admin-dash.component';
import { UserProfileComponent } from './components/views/user/user-profile/user-profile.component';
import { HomeComponent } from './components/views/home/home.component';
import { EditPetComponent } from './components/views/pet/edit-pet/edit-pet.component';
import { PetProfileComponent } from './components/views/pet/pet-profile/pet-profile.component';
import { CreatePetComponent } from './components/views/pet/create-pet/create-pet.component';
import { TestComponent } from './components/views/test/test.component';
import { ChartsComponent } from './components/views/admin-dash/charts/charts.component';

const routes: Routes = [ 
  {path: '', component: HomeComponent},
  {path:'create-pet', component:CreatePetComponent},
  {path:'admin-dash', component:AdminDashComponent},
  {path:'user-profile/:id', component:UserProfileComponent},
  {path:'edit-pet/:id', component:EditPetComponent},
  {path:'pet-profile/:id', component:PetProfileComponent},
  {path:'test', component:TestComponent},
  {path:'admin-dash/charts', component:ChartsComponent}
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
