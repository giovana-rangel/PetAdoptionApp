import { DataSource } from '@angular/cdk/collections';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { PetAdoptionAppService } from '../../../shared/services/pet-adoption-app.service';

export interface User {
  name: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  @Input() pets:any;
  // @Input() message:string;
  dataSource:any;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('input') input!:ElementRef<HTMLInputElement>;

  constructor(private service:PetAdoptionAppService) { }

  ngOnInit(): void {
    console.log('Desde componente search');
    console.log(this.pets);
  }
  
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // buscar(){
  //   const value = this.input.nativeElement.value;
  //   if(value.trim() === '') return;
  // }
}
