import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {APP_BASE_HREF} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {ModalModule} from "ngx-bootstrap/modal";
import {AlertModule} from "ngx-bootstrap/alert";

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header.component";
import {FooterComponent} from "./footer.component";
import {CreateItemSelectTypeComponent} from "./item/components/create-item-select-type/create-item-select-type.component";
import {ItemDashboardComponent} from "./item/components/item-dashboard/item-dashboard.component";
import {LoadSaItemComponent} from "./item/components/load-sa-item/load-sa-item.component";
import {ToastyModule} from "ng2-toasty";
import {FindItemComponent} from "./item/components/find-item/find-item.component";
import {Logger} from "./core/logger.service/logger.service";
import {UserService} from "./core/user.service/user.service";
import {AppInfoService} from "./core/app-info.service/app-info.service";
import {CoreModule} from "./core/core.module";
import {LoadWerItemComponent} from "./item/components/load-wer-item/load-wer-item.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ItemDashboardComponent,
        CreateItemSelectTypeComponent,
        LoadSaItemComponent,
        LoadWerItemComponent,
        FindItemComponent
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        AppInfoService,
        Logger,
        UserService
      ],
      imports: [
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot([]),
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        AlertModule.forRoot(),
        ToastyModule.forRoot()
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
