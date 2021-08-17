import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystEditComponent } from './analyst-edit.component';

describe('AnalystEditComponent', () => {
  let component: AnalystEditComponent;
  let fixture: ComponentFixture<AnalystEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalystEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
