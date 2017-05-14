import { NgModule } from '@angular/core';

import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdDatepickerModule, MdInputModule,
         MdButtonModule, MdIconModule,
         MdCardModule } from '@angular/material';

@NgModule({
    exports:[
        BrowserAnimationsModule,
        MdDatepickerModule,
        MdInputModule,
        MdButtonModule,
        MdIconModule,
        MdCardModule
    ],
    providers:[]
})
export class AppMaterialSpecifics {
}
