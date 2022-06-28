import { Component, OnInit, ViewChild } from '@angular/core';
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';
import { Pet } from '../../../../shared/Models/pet';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Subscription } from 'rxjs';
import { NavigateService } from '../../../../shared/services/navigate.service';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.css']
})
export class PetTableComponent implements OnInit {
  dataSource:any;
  pets:any;
  subscription:Subscription;

  displayedColumns: string[] = ['pet', 'treatments', 'vacines', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor
  (
    public _service:PetAdoptionAppService,
    private _liveAnnouncer: LiveAnnouncer,
    public _navigate:NavigateService,
  ) { }

  ngOnInit(): void {
    this.data();
    this.subscription = this._service.refresh.subscribe(() => {
      this.data();
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // === HTTP calls ===//
  data():void {
    this._service.getPetFullData().subscribe((res:any)=>{
      this.pets = res;
      console.log(res);
      this.dataSource = new MatTableDataSource(this.pets.$values);
    });
  }

  deletePet(id:number):void{
    this._service.deletePet(id).subscribe();
    this.data();
  }

  //=== Angular Material ==//
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  //=== navigate ===//
  goToPetProfile(id:number){
    this._navigate.goToPetProfile(id);
  }

  goToEditPet(id:number){
    this._navigate.goToEditPet(id);
  }
}
