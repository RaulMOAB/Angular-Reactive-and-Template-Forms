import { Component, OnInit } from '@angular/core';
import { RandomUsersService } from 'src/app/services/random-users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  user!:string[];
 


  constructor(private randomUsers: RandomUsersService){}

  ngOnInit(): void {
    this.user = this.randomUsers.createusers();
  }
}
