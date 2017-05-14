import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppMaterialSpecifics } from './app-material-specifics';

import { SharedService } from './app.shared.service';

import { MdNativeDateModule,NativeDateAdapter, DateAdapter } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppMaterialSpecifics,
    MdNativeDateModule
  ],
  providers: [
    {provide: DateAdapter, useClass: NativeDateAdapter},
    {provide: 'shared', useClass: SharedService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
