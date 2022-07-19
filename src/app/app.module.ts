import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialUiModule } from './shared/material-ui/material-ui.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgApexchartsModule } from 'ng-apexcharts';

//components
import { AppComponent } from './app.component';
import { MainMenuComponent } from './components/elements/main-menu/main-menu.component';
import { ToolBarComponent } from './components/elements/tool-bar/tool-bar.component';
import { SearchBarComponent } from './components/elements/search-bar/search-bar.component';
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
import { ChartsComponent } from './components/views/admin-dash/analitics/charts/charts.component';
import { TopFavPetsComponent } from './components/views/admin-dash/analitics/top-fav-pets/top-fav-pets.component';
import { FavPetComponent } from './components/views/fav-pet/fav-pet.component';
import { ChatroomComponent } from './components/views/chatroom/chatroom.component';
import { AnaliticsComponent } from './components/views/admin-dash/analitics/analitics.component';
import { UserSettingsComponent } from './components/views/admin-dash/user-settings/user-settings.component';
import { PetsSettingsComponent } from './components/views/admin-dash/pets-settings/pets-settings.component';
import { SettingsComponent } from './components/views/admin-dash/settings/settings.component';
import { AdminComponent } from './components/views/admin-dash/dashboard/admin.component';
import { ListComponent } from './components/views/pet/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    ToolBarComponent,
    SearchBarComponent,
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
    AnaliticsComponent,
    UserSettingsComponent,
    PetsSettingsComponent,
    SettingsComponent,
    AdminComponent,
    ListComponent,  
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
