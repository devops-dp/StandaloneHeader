import { Component, ViewChild, EventEmitter, Output, Inject } from '@angular/core';
import { MdDatepicker, MdDialogRef } from '@angular/material';

import { SharedService } from './app.shared.service';
@Component({
  selector: 'stand-header',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(@Inject('shared') private shared: SharedService){
    shared.missionConfirmed$.subscribe(
      data => {
        console.log(data);
      }
    );
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
  saveDate(val){
    console.log(`Component --> ${val}`);
    window.dispatchEvent(new CustomEvent('test', {detail: {title: val,name: 'newValue'}}));
    this.shared.announceMission('Deepak');
    this.urlEmitter.emit('Deepak emitted');
  }

  sendRedirect(url){
    window.dispatchEvent(new CustomEvent('routing', {detail: {url:url}}));
  }

  navigator(){
    this.urlEmitter.emit('Deepak');
  }
}
