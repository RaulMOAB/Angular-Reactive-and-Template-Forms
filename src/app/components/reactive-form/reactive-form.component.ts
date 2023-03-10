import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';//class user

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  user!:User;
  username!:string;
  password!:string;
  repeat_password!:string;
  email!:string;
  state!:any;
  sex!:any;
  interest!:any;
  civil_status:any = ['Casado/a', 'Soltero/a', 'Divorciado/a']
  information:any  = ['Videojuegos', 'Accesorios', 'Novedades del mercado']
  info!:string;//parametro de onChange que recoge el valor del checkbox
  selectedCheckbox:any = [];//checkboxes seleccionados
  gender:any       = ['Hombre', 'Mujer', 'Otros']

  loginForm = new FormGroup({
    username: new FormControl('',
    [
     Validators.required,
     Validators.minLength(6),
     Validators.pattern('[a-zA-Z]+')
    ]),
    password: new FormControl('',
    [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern('[A-Za-z0-9]+')
    ]),
    repeat_password: new FormControl('',
    [
      Validators.required,
      
    ]),
    email: new FormControl('',
    [
      Validators.required,
      Validators.email,
    ]),
    civil_status: new FormControl('',
    [
    Validators.required
    ]),
    gender: new FormControl('',
    [
      Validators.required
    ]),
    information: new FormControl(''),
    accept_conditions: new FormControl('',
    [
      Validators.requiredTrue,
      
    ])
  })


  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.email    = '';
    this.state    = '';
    this.sex      = '';
    this.interest = '';
  }

  
  submit(){

    // this.user = new User(this.loginForm.value.username,
    //                       this.loginForm.value.password,
    //                       this.loginForm.value.repeat_password,
    //                       this.loginForm.value.email,
    //                       this.loginForm.value.civil_status,
    //                       this.loginForm.value.gender,
    //                       this.info)

    //this.user = new User(this.loginForm.value.username,this.loginForm.value.email, this.loginForm.value.civil_status, this.loginForm.value.gender, this.info);                  
    
    this.username = `Nombre usuario: ${this.loginForm.value.username}`;
    this.email    = `Email: ${this.loginForm.value.email}`;
    this.state    = `Estado civil: ${this.loginForm.value.civil_status}`
    this.sex      = `${this.loginForm.value.gender}`
    this.interest = `Intereses: ${this.info}`

    
  }

  onChange(info:string){
   
    let index = this.selectedCheckbox.indexOf(info);
    
    if (this.selectedCheckbox.indexOf(info) === -1) {//no esta en el array
      this.selectedCheckbox.push(info);
    } else if (this.selectedCheckbox.indexOf(info) > -1){
      this.selectedCheckbox.splice(index, 1);// lo borra por posicion
    }

    this.info = this.selectedCheckbox; //a??ado el array a la variable a mostrar
  }

}
