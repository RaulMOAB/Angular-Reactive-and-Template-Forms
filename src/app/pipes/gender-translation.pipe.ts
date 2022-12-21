import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderTranslation'
})
export class GenderTranslationPipe implements PipeTransform {

  transform(value: any, args: any): any {
    console.log(value);
    console.log(args);
    if (args != null) {
      if (args == 'eng') {
        switch (value) {
          case 'Hombre': return 'Men';
          case 'Mujer' : return 'Women';
          case 'Otros' : return 'Others';
         
        }
      }
    }else{
      switch (value){
        case 'Hombre': return 'Hombre'
      }
    }
    return null;
  }

}
