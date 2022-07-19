//angular modules
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { Observable } from 'rxjs';
//service
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  id:number = Number(this.activatedRoute.snapshot.paramMap.get('id'));
  pets:any = this.service.getPetsByUserId(this.id);
  show:boolean;
  user: any;
  @Input() users:any;

  constructor
  (
    public service:PetAdoptionAppService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
  ) 
  {}

  ngOnInit() {
    this.getUser(this.id);
  }

  getUser(id:number):void {
    this.service.getUser(id).subscribe((res:any)=>{this.user = res});
  }
}
