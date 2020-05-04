import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feature :string = 'recipe';
  Navigation(feature : string){
    this.feature=feature;
  }
}
