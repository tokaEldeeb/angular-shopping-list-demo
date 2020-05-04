import {Component,NgModule} from '@angular/core';

@Component({
    selector : 'app-server' ,
    templateUrl : './server.component.html',
    styles : [`
        .online {
            color:red;
        }
    `]
})

export class ServerComponent{
 serverId = 10;
 statusSer = 'offline';
 disabled = false;
dataChanged = "test";
 constructor(){
     setTimeout(() => {
         this.disabled=true;
     }, 2000);
 }
 onUpdateText(event : Event){
    this.dataChanged = (<HTMLInputElement>event.target).value;
 }
 getColor(){
     return this.disabled === true ? 'red' : 'green';
 }
}