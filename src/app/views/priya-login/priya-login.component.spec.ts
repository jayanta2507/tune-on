import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriyaLoginComponent } from './priya-login.component';

describe('PriyaLoginComponent', () => {
  let component: PriyaLoginComponent;
  let fixture: ComponentFixture<PriyaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriyaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriyaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
