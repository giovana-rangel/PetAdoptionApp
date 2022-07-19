import { Component, OnInit, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Subscription } from 'rxjs';
//== Services ==//
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';
import { NavigateService } from '../../../../shared/services/navigate.service';
//== Material ==//
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
//== Models and interfaces ==//
import { IHealth } from '../../../../shared/interfaces/healthReport';

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.css']
})

export class PetTableComponent implements OnInit {
  pets:IHealth;
  dataSource:any;
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

  // === SERVICE CALLS ===//
  data():void {
    this._service.getPetHealthReport().subscribe((res)=>{
      this.pets = res as IHealth;
      this.dataSource = new MatTableDataSource(this.pets.$values);
    });
  }

  deletePet(id:number):void{
    this._service.deletePet(id);
    this.data();
  }

  //=== MATERIAL ==//
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

  //=== NAVIGATE ===//
  goToPetProfile(id:number){
    this._navigate.GoToPetProfile(id);
  }

  goToEditPet(id:number){
    this._navigate.GoToEditPet(id);
  }
}
