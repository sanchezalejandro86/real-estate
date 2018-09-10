import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {SharedModule} from "../core/shared.module";
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
