import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomUsersService {

  constructor() { }
  createusers():string[] {
   const max_users:number = 30;
   let users:string[] = [];
   const username: string[] = ['Marquez',
    'Shakayla', 
    'Alize' ,
    'Cory', 
    'Diamond' ,
    'Shannon',
    'Lamar',
    'Mohammed' ,
    'Wayne', 
    'Kavon', 
    'Garret', 
    'Dorothy',
    'Korey',
    'Livia',
    'Bonnie',
    'Devin',
    'Josue',
    'Nikhil' ,
    'Mordechai', 
    'Kylan',
    'Trey',
    'Toby',
    'Dezmond',
    'Isaias', 
    'Katlyn', 
    'Daron', 
    'Jarrod', 
    'Taj', 
    'Arthur', 
    'Fred' ]

    const email: string[] = ['Marquez@gmail.com',
    'Shakayla@gmail.com', 
    'Alize@gmail.com' ,
    'Cory@gmail.com', 
    'Diamond@gmail.com' ,
    'Shannon@gmail.com',
    'Lamar@gmail.com',
    'Mohammed@gmail.com' ,
    'Wayne@gmail.com', 
    'Kavon@gmail.com', 
    'Garret@gmail.com', 
    'Dorothy@gmail.com',
    'Korey@gmail.com',
    'Livia@gmail.com',
    'Bonnie@gmail.com',
    'Devin@gmail.com',
    'Josue@gmail.com',
    'Nikhil@gmail.com' ,
    'Mordechai@gmail.com', 
    'Kylan@gmail.com',
    'Trey@gmail.com',
    'Toby@gmail.com',
    'Dezmond@gmail.com',
    'Isaias@gmail.com', 
    'Katlyn@gmail.com', 
    'Daron@gmail.com', 
    'Jarrod@gmail.com', 
    'Taj@gmail.com', 
    'Arthur@gmail.com', 
    'Fred@gmail.com' ]

    for (let i: number = 0; i < max_users; i++) {
      let random_num = Math.floor(Math.random() * max_users);
      users.push(username[random_num], email[random_num]);
      console.log(users);
      
    }
   
    return users;
  }
}
