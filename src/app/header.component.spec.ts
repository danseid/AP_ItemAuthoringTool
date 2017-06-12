import {async, TestBed} from "@angular/core/testing";
import {HttpModule} from "@angular/http";
import {HeaderComponent} from "./header.component";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import {ModalModule} from "ngx-bootstrap/modal";
import {CollapseDirective} from "ngx-bootstrap/collapse";
import {Logger} from "./core/logger.service";
import {UserService} from "./core/user.service";

describe('HeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        CollapseDirective
      ],
      imports: [
        HttpModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot()
      ],
      providers: [
        Logger,
        UserService
      ]
    }).compileComponents();
  }));

  it('should be created', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});