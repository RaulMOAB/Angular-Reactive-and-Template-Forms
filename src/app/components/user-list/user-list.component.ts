import { Component, OnInit } from '@angular/core';
import { RandomUsersService } from 'src/app/services/random-users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users:any = [];
  items_per_page!:number;
  current_page!:number;
 
  constructor(private randomUsers: RandomUsersService){}

  ngOnInit(): void {
    this.items_per_page = 15;
    this.current_page = 1;
    this.users = this.randomUsers.createusers();
  }
}
