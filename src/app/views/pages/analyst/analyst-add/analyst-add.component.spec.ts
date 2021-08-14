import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystAddComponent } from './analyst-add.component';

describe('AnalystAddComponent', () => {
  let component: AnalystAddComponent;
  let fixture: ComponentFixture<AnalystAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalystAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
