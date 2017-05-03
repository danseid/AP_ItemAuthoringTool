import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCreateSaComponent } from './item-create-sa.component';

describe('ItemCreateSaComponent', () => {
  let component: ItemCreateSaComponent;
  let fixture: ComponentFixture<ItemCreateSaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCreateSaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCreateSaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
