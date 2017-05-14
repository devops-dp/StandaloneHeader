import { Component, ViewChild, EventEmitter,
         Output, Inject, HostListener } from '@angular/core';
import { MdDatepicker, MdDialogRef } from '@angular/material';

import { SharedService } from './app.shared.service';
@Component({
  selector: 'stand-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  uname:string = "Srinivas, Pawan kalyan";
  constructor(@Inject('shared') private shared: SharedService){
    shared.missionConfirmed$.subscribe(
      data => {
        console.log(data);
      }
    );
  }

  @HostListener('window:save', ['$event'])
  doRoute(event){
      let uname = event.detail.uname;
      this.uname = uname && uname.length > 0?uname:this.uname;
  }

  @Output()
  urlEmitter = new EventEmitter<string>();

  @ViewChild(MdDatepicker)
  remind:MdDatepicker<Date>;

  @ViewChild(HTMLInputElement)
  dated: HTMLInputElement;

  clearDate(targ, trig){
    if( trig ){
      this.remind.open();
    }
    else{
      targ.value = '';
      this.remind.close();
    }
  }
  sendData(val){
    window.dispatchEvent(new CustomEvent('srch', {detail: {data: val}}));
  }

  sendRedirect(url): void{
    window.dispatchEvent(new CustomEvent('routing', {detail: {url:url}}));
  }
}
