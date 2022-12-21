import { Directive } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appForbidenNames]',
  providers: [
    {
    provide: NG_VALIDATORS,
    useExisting: ForbidenNamesDirective,
    multi: true
    }
  ]
})

//Esta currada vale por 2 directivas (Susana)
export class ForbidenNamesDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    console.log(control.value);
    let forbiden_words:any = [/caca/i, /pedo/i, /culo/i, /pis/i];
   
    for (let index = 0; index < forbiden_words.length; index++) {
      if (control.value && control.value.match(forbiden_words[index])) {
        return { 'forbidden': true }
      }     
    }
    
    return null;
    }

   
}

