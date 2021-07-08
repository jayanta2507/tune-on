import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EshaLoginComponent } from './esha-login.component';

describe('EshaLoginComponent', () => {
  let component: EshaLoginComponent;
  let fixture: ComponentFixture<EshaLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EshaLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EshaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
