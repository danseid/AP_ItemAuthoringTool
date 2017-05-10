/*
 * Copyright 2017 Regents of the University of California.
 *
 * Licensed under the Educational Community License, Version 2.0 (the "license");
 * you may not use this file except in compliance with the License. You may
 * obtain a copy of the license at
 *
 * https://opensource.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* tslint:disable:no-unused-variable */

import {ComponentFixture, TestBed, async} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LogOutComponent} from './header/log-out/logout.component';
import {FooterComponent} from './footer/footer.component';
import {ItemSelectComponent} from './item-select/item-select.component';
import { HomeComponent } from './home/home.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemCreateSaComponent } from './item-create-sa/item-create-sa.component';
import { ConfirmModalComponent, ConfirmService,
  ConfirmState, ConfirmTemplateDirective } from './confirm-modal/confirm-modal';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LogOutComponent,
        HomeComponent,
        ItemSelectComponent,
        ItemCreateComponent,
        ItemCreateSaComponent,
        ConfirmModalComponent,
        ConfirmTemplateDirective
      ],
      providers: [
        {provide: APP_BASE_HREF, useValue: '/'},
        ConfirmService,
        ConfirmState
      ],
      imports: [
        FormsModule,
        HttpModule,
        RouterModule.forRoot([]),
        NgbModule.forRoot()
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
