import { Component, ViewChild } from '@angular/core';
import { DataComponent } from './components/data/data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('loginData') loginData!:DataComponent;

  title = 'my-app';

  displayData():void{
    this.loginData.displayLoginData();
  }
}

