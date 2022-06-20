import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetAdoptionAppService } from 'src/app/shared/services/pet-adoption-app.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  id:number;
  user:any;
  users:any;

  constructor
  (
    public service:PetAdoptionAppService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getUser(this.id);
    this.getAllUsers();
  }

  getAllUsers():void {
    this.service.getListUsers().subscribe((res:any)=>{
      this.users = res;
      console.log(this.users);
    });
  }

  getUser(id:number):void {
    this.service.getUser(id).subscribe((res:any)=>{this.user = res});
    console.log(this.user);
  }

}
