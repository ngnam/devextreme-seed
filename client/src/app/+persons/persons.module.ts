import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonsRoutingModule } from './persons-routing.module';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { PersonsComponent } from './persons.component';
import { MaterialModule } from '../framework/material/material.module';
import { SharedModule } from '../framework/core/shared.module';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    PersonsRoutingModule,
    MaterialModule,
    SharedModule,
    // Install devextreme module
    DxDataGridModule,
    DxFormModule
  ],
  declarations: [PersonsComponent, AboutComponent]
})
export class PersonsModule { }
