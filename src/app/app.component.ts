import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PetAdoptionApp';
  showFiller = false;
  showSideNav:boolean = false;
  private sidenav: MatSidenav;

  openSideNav(drawer:any){
    console.log(drawer);
    if(this.showSideNav){
      if(drawer._opened){
        return drawer.close();
      }else{
        return drawer.open();
      }
    }
  }

  
  getResponse(event:any) {  
    this.showSideNav = event;  
  }
}
