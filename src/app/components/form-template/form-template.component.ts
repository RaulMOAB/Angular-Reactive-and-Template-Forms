import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit{
  username!:string;
  password!:any;
  repeat_password!:any;
  email!:string;
  state!:string;
  civil_state:any;
  gender:any;
  information:any;
  accept_conditions!:any;

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.repeat_password = '';
    this.email = '';
    this.state = '';
    this.civil_state = ['Soltero/a', 'Casado/a', 'Divorciado/a'];
    this.gender = ['Hombre', 'Mujer', 'Otros'];
    this.information = ['Videojuegos', 'Accesorios', 'Novedades del mercado'];
  }

  submit(){
    console.log('Hola');
  }
}
