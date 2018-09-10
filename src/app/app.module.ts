import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule, DomSanitizer} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import { MatIconRegistry, MatIconModule } from '@angular/material';

import {AppComponent} from "./app.component";
import {SharedModule} from "./core/shared.module";
import {HeaderModule} from "./header/header.module";
import {FooterModule} from "./footer/footer.module";
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./home/home.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('./assets/mdi.svg'));
  }
}
