import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";
import {SharedModule} from "./core/shared.module";
import {HeaderModule} from "./header/header.module";
import {FooterModule} from "./footer/footer.module";
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./home/home.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
