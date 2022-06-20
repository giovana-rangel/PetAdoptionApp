import { Component, OnInit, ViewChild } from '@angular/core';
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';
import { Pet } from '../../../../shared/Models/pet';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Subscription } from 'rxjs';
import { NavigateService } from '../../../../shared/services/navigate.service';

@Component({
  selector: 'app-pet-table',
  templateUrl: './pet-table.component.html',
  styleUrls: ['./pet-table.component.css']
})
export class PetTableComponent implements OnInit {
  pets:any;
  petsDataSource:any;
  subscription:Subscription;

  displayedColumns: string[] = ['pet', 'location', 'sex', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

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
    this.petsDataSource.paginator = this.paginator;
    //this.petsDataSource.sort = this.sort;
  }

  // === HTTP calls ===//
  data():void {
    this._service.getListPets().subscribe((res:any)=>{
      this.pets = res;
      console.log(res);
      this.petsDataSource = new MatTableDataSource(this.pets.$values);
    });
  }

  deletePet(id:number):void{
    this._service.deletePet(id).subscribe();
    this.data();
  }

  //=== Angular Material ==//
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.petsDataSource.filter = filterValue.trim().toLowerCase();
  }

  //=== navigate ===//
  goToPetProfile(id:number){
    this._navigate.goToPetProfile(id);
  }

  goToEditPet(id:number){
    this._navigate.goToEditPet(id);
  }
}
