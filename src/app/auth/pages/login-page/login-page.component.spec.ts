import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoginPageComponent } from './login-page.component';
import { AuthModule } from '@app/auth/auth.module';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      ...new AuthModule(),
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create LoginPage', () => {
    expect(component).toBeTruthy();
  });

  it('should show error tips', waitForAsync(() => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();

    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const errorTip = fixture.nativeElement.querySelector('small');
      expect(errorTip.innerText.trim()).toBe('Поле Почта обязательно!');
    });
  }));
});
