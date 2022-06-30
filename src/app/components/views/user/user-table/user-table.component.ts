//angular modules
import { Component, OnInit, ViewChild, ChangeDetectorRef, Input } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
//Services
import { PetAdoptionAppService } from '../../../../shared/services/pet-adoption-app.service';
import { NavigateService } from '../../../../shared/services/navigate.service';
//angular material
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription, Observable } from 'rxjs';
import { IUser, IUsers, UserEntries } from '../../../../shared/interfaces/user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})

export class UserTableComponent implements OnInit {
  @Input() users:Observable<IUsers>;
  usersDataSource:any;
  subscription:Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns: string[] = ['user', 'email', 'status', 'actions'];

  constructor(
    public service:PetAdoptionAppService,
    private _liveAnnouncer: LiveAnnouncer,
    public _navigate: NavigateService,
  ) {}

  ngOnInit(): void {
    this.data();
    this.subscription = this.service.refresh.subscribe(() => {
      this.data();
    });
  }

  //=== HTTP Calls ===//
  data():void {
    this.users.subscribe((res)=>{
      let u = res as IUsers;
      this.usersDataSource = new MatTableDataSource(u.users.$values);
    });
  }

  deleteUser(id:number):void{
    this.service.deleteUserClient(id);
    this.data();
  }

  //=== Angular Material ===//
  ngAfterViewInit() {
    this.usersDataSource.paginator = this.paginator;
    this.usersDataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.usersDataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  //=== navigate ===//
  goToUserProfile(id:number){
    this._navigate.goToUserProfile(id);
  }

  goToEditUser(id:number){
    this._navigate.goToEditUser(id);
  }
}