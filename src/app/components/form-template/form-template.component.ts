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
  status!:string;
  civil_state:any;
  gender:any;
  sex_selected:any;
  information:any;
  interest:any;
  info!:string;//parametro de onChange que recoge el valor del checkbox
  selectedCheckbox:any = [];//checkboxes seleccionados
  Videjuegos!:boolean;
  accept_condition!:any;

  accept_conditions!:any;
  data_username!:string;
  data_email!:string;
  data_status!:string;
  data_gender!:string;

  ngOnInit(): void {
    this.username = '';
    this.password = '';
    this.repeat_password = '';
    this.email = '';
    this.status = '';
    this.civil_state  = ['Soltero/a', 'Casado/a', 'Divorciado/a'];
    this.gender       = ['Hombre', 'Mujer', 'Otros'];
    this.sex_selected = '';
    this.information  = ['Videojuegos', 'Accesorios', 'Novedades del mercado'];
    this.interest = [];
  }

  onChange(info:string){
    let index = this.selectedCheckbox.indexOf(info);

    if (index === -1) {//no esta en el array
      this.selectedCheckbox.push(info);
    }else if(index > -1){
      this.selectedCheckbox.splice(index,1);// lo borra por la posición  
    }

    this.info = this.selectedCheckbox;// añado el array a la variable
  }

  submit(){
    this.data_username = this.username;
    this.data_email    = this.email
    this.data_status   = this.status;
    this.data_gender   = this.sex_selected;
    this.info;
  }

 
}
