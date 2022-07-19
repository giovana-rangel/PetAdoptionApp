import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NavigateService } from 'src/app/shared/services/navigate.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent implements OnInit {
  hidden = false;
  showSidebar = false;
  showMenu = false;
  notifications = true;

  constructor(private _navigate : NavigateService) {}

  ngOnInit(): void { }
  
  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  toggleSidebarVisiblility(){
    if(this.showSidebar){
      this.showSidebar=false;
    }else{
      this.showSidebar=true;
      this.showMenu=false;
    }
  }

  toggleMenuVisiblility(){
    if(this.showMenu){
      this.showMenu=false;
    }else{
      this.showMenu=true;
      this.showSidebar=false;
    }
  }

  //Navigate
  goToCreatePet(){  this._navigate.GoToCreatePet();}
}
