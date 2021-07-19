import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedButtonComponent } from './detailed-button.component';

describe('DetailedButtonComponent', () => {
  let component: DetailedButtonComponent;
  let fixture: ComponentFixture<DetailedButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
