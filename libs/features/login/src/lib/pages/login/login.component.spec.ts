import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@griin/ui';
import { UserFacade } from '../../+state/user.facade';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const mockFacade = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule, ReactiveFormsModule],
      providers: [{ provide: UserFacade, useValue: mockFacade }],
      declarations: [LoginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
