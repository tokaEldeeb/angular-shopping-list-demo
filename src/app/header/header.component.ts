import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() FeatureSelected= new EventEmitter<string>();
isCollapsed = false;
  constructor() { }

  ngOnInit(): void {
  }
    OnSelect(feature : string){
      this.FeatureSelected.emit(feature);
    }
}
