import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystListComponent } from './analyst-list.component';

describe('AnalystListComponent', () => {
  let component: AnalystListComponent;
  let fixture: ComponentFixture<AnalystListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalystListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
