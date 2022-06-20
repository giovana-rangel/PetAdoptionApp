import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.css']
})

export class SelectLocationComponent implements OnInit {
  locationString:string;
  constructor() { }

  // H0laMundo#
  ngOnInit()
  {
    
  }

  placeSelected(e:any){
    console.log('ubicacion seleccionada');
    console.log(e);
    // this.locationString = e;
  }

  suggestionsChanged(e:any){
    // console.log(e);
  }

}
