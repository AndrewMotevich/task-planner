import { Location } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { ABOUT } from '../shared/constants/routing-paths.consts';
import { AboutComponent } from '../shared/pages/about/about.component';
import { NotFoundPageComponent } from '../shared/pages/not-found-page/not-found-page.component';

describe('Routing', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, AboutComponent, NotFoundPageComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: ABOUT.path, component: AboutComponent },
          { path: '**', component: NotFoundPageComponent },
        ]),
      ],
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router.initialNavigation();
  });

  it('should create AppComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to about page', waitForAsync(() => {
    router.navigate([ABOUT.fullPath]).then(() => {
      expect(location.path()).toBe('/about');
    });
  }));

  it('should navigate to notFound page', waitForAsync(() => {
    router.navigate(['/dsafd']).then(() => {
      const divElement = fixture.nativeElement.querySelector('div')
      expect(divElement.classList[0]).toBe('not-found-page-wrapper')
    });
  }));
});
