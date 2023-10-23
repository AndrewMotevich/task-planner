import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';
import { CoreModule } from '../../core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterService } from 'src/app/shared/services/filter.service';

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      ...new CoreModule(),
      providers: [FilterService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create SideBarComponent', () => {
    expect(component).toBeTruthy();
  });
});
