import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  //@HostBinding('class') classBinded : string;
  @HostBinding('class.open') open:boolean = false;
  constructor() { }

  @HostListener('click') dropDownClicked(){
    this.open = !this.open;
    //here want to add class if opened or remove the class if not opened
    // if(this.open){
    //   //first time to click
    //   this.classBinded = 'open';
    // }
    // else{
    //   this.classBinded = '';
    // }
  }

  
}
