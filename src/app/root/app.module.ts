import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {Ng2BootstrapModule} from "ngx-bootstrap/ng2-bootstrap";
import {AppRoutingModule} from "./app.routing";
import {AppComponent} from "./components/app.component/app.component";
import {ToastyModule} from "ng2-toasty";

import {ResourceNotFoundComponent} from "./components/resource-not-found.component/resource-not-found.component";
import {HeaderComponent} from "./components/header.component/header.component";
import {FooterComponent} from "./components/footer.component/footer.component";
import {CoreModule} from "../core/core.module";
import {ItemModule} from "../item/item.module";
import {SharedModule} from "../shared/shared.module";

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
    ItemModule,
    CoreModule,
    Ng2BootstrapModule.forRoot(),
    SharedModule,
    ToastyModule.forRoot()
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

