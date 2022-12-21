import { Directive, Input } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appConfirmPassword]',
  providers: [
    {
    provide: NG_VALIDATORS,
    useExisting: ConfirmPasswordDirective,
    multi: true
    }
  ]
})
export class ConfirmPasswordDirective implements Validator{
@Input() param!:any;//*el parametro que pasamos desde el tag html fuera de la directiva

  constructor() { }


  validate(control: AbstractControl): ValidationErrors | null {
   
   
    if (control && control.value && control.value != this.param) {
      return {'noMatch': true}
    }else{
      return null;
    }

  }

}
