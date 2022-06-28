import { ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { PetAdoptionAppService } from '../../../shared/services/pet-adoption-app.service';
import { Observable } from 'rxjs';
import { PetEntries } from '../../../shared/interfaces/pets';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @ViewChild("paginator") paginator: MatPaginator;
  dataSource: Observable<PetEntries> = this.service.getListPets2();
  pageEvent:PageEvent;
  length = 50;
  pageSize = 10;
  pageIndex = 0;

  constructor
  (
    private service:PetAdoptionAppService,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  onPaginateChange(event:PageEvent){
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
  }
}
