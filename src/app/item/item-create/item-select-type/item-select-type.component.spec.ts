import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ItemSelectTypeComponent } from './item-select-type.component';
import { LookupService} from '../../../service/lookup.service';
import { RouterTestingModule} from '@angular/router/testing';

describe('ItemSelectTypeComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ItemSelectTypeComponent
      ],
      imports: [
        HttpModule,
        RouterTestingModule
      ],
      providers: [
        LookupService
      ]
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ItemSelectTypeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
