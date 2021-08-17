import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystDeatilsComponent } from './analyst-deatils.component';

describe('AnalystDeatilsComponent', () => {
  let component: AnalystDeatilsComponent;
  let fixture: ComponentFixture<AnalystDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalystDeatilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalystDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
