import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFacade } from '@griin/features/user';
import { UiModule } from '@griin/ui';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  const mockFacade = {};
  const mockAngularFireAuth = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiModule, ReactiveFormsModule],
      providers: [
        { provide: UserFacade, useValue: mockFacade },
        { provide: AngularFireAuth, useValue: mockAngularFireAuth },
      ],
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
