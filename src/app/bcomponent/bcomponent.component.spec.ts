import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcomponentComponent } from './bcomponent.component';

describe('BcomponentComponent', () => {
  let component: BcomponentComponent;
  let fixture: ComponentFixture<BcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
