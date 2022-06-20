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
    }
    
  }

  //Navigate
  goToCreatePet(){  
    this._navigate.goToCreatePet();
  }
}
