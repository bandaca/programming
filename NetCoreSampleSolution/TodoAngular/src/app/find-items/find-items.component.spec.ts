import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindItemsComponent } from './find-items.component';

describe('FindItemsComponent', () => {
  let component: FindItemsComponent;
  let fixture: ComponentFixture<FindItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
