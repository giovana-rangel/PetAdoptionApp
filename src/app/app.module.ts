import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialUiModule } from './shared/material-ui/material-ui.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { environment } from './../environments/environment';
import { GeoapifyGeocoderAutocompleteModule } from '@geoapify/angular-geocoder-autocomplete';
import { NgApexchartsModule } from 'ng-apexcharts';
//components
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/elements/main-menu/main-menu.component';
import { ToolBarComponent } from './components/elements/tool-bar/tool-bar.component';
import { SelectLocationComponent } from './components/elements/select-location/select-location.component';
import { SearchBarComponent } from './components/elements/search-bar/search-bar.component';
import { AdminDashComponent } from './components/views/admin-dash/admin-dash.component';
import { UserTableComponent } from './components/views/user/user-table/user-table.component';
import { UserProfileComponent } from './components/views/user/user-profile/user-profile.component';
import { HomeComponent } from './components/views/home/home.component';
import { ProfileInfoComponent } from './components/views/user/profile-info/profile-info.component';
import { PetsComponent } from './components/views/pet/pets/pets.component';
import { EditPetComponent } from './components/views/pet/edit-pet/edit-pet.component';
import { PetProfileComponent } from './components/views/pet/pet-profile/pet-profile.component';
import { PetProfileInfoComponent } from './components/views/pet/pet-profile-info/pet-profile-info.component';
import { ContactOwnerComponent } from './components/elements/contact-owner/contact-owner.component';
import { CreatePetComponent } from './components/views/pet/create-pet/create-pet.component';
import { PetTableComponent } from './components/views/pet/pet-table/pet-table.component';
import { ChartsComponent } from './components/views/admin-dash/charts/charts.component';
import { TopFavPetsComponent } from './components/views/admin-dash/top-fav-pets/top-fav-pets.component';
import { FavPetComponent } from './components/views/fav-pet/fav-pet.component';
import { ChatroomComponent } from './components/views/chatroom/chatroom.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ToolBarComponent,
    SelectLocationComponent,
    SearchBarComponent,
    AdminDashComponent,
    UserTableComponent,
    UserProfileComponent,
    HomeComponent,
    ProfileInfoComponent,
    PetsComponent,
    EditPetComponent,
    PetProfileComponent,
    PetProfileInfoComponent,
    ContactOwnerComponent,
    CreatePetComponent,
    PetTableComponent,
    ChartsComponent,
    TopFavPetsComponent,
    FavPetComponent,
    ChatroomComponent,  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialUiModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgApexchartsModule,
    GeoapifyGeocoderAutocompleteModule.withConfig(environment.mapApiKey),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
