import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';//class user

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  data!:string;
  civil_status:any = ['Casado/a', 'Soltero/a', 'Divorciado/a']
  information:any  = ['Videojuegos', 'Accesorios', 'Novedades del mercado']
  info!:string;//parametro de onChange que recoge el valor del checkbox
  selectedCheckbox:any = [];//checkboxes seleccionados
  gender:any       = ['Hombre', 'Mujer', 'Otros']
  user!:User;

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
    civil_status: new FormControl(''),
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
    this.data = '';
    this.user = new User()
  }

  submit(){
    this.data = `Nombre de usuario ${this.loginForm.value.username}
    Email ${this.loginForm.value.email}
    Estado civil ${this.loginForm.value.civil_status}
    Genero ${this.loginForm.value.gender}
    Intereses ${this.info}`;
    
  }

  onChange(info:string){
   
    let index = this.selectedCheckbox.indexOf(info);
    
    if (this.selectedCheckbox.indexOf(info) === -1) {//no esta en el array
      this.selectedCheckbox.push(info);
    } else if (this.selectedCheckbox.indexOf(info) > -1){
      this.selectedCheckbox.splice(index, 1);// lo borra por posicion
    }

    this.info = this.selectedCheckbox; //añado el array a la variable a mostrar
  }

}
