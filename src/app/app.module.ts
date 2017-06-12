import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {Ng2BootstrapModule} from "ngx-bootstrap/ng2-bootstrap";

import {AppRoutingModule} from "./app.routing";
import {AppComponent} from "./app.component";
import {ToastyModule} from "ng2-toasty";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {ItemModule} from "./item/item.module";
import {ResourceNotFoundComponent} from "./resource-not-found.component";
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ResourceNotFoundComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    ItemModule,
    Ng2BootstrapModule.forRoot(),
    SharedModule,
    ToastyModule.forRoot(),
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
