import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { MobileFooterBarComponent } from './mobile-footer-bar.component';
import { FilterService } from 'src/app/shared/services/filter.service';

describe('MobileFooterBarComponent', () => {
  let component: MobileFooterBarComponent;
  let fixture: ComponentFixture<MobileFooterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileFooterBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileFooterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create MobileFooterBarComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should set overdue task filter', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    buttons[0].click()
    expect(component.isOverdueTasks).toBe(true);
  });

  it('should set completed task filter', () => {
    const buttons = fixture.nativeElement.querySelectorAll('button');
    buttons[1].click()
    expect(component.isCompletedTasks).toBe(true);
  });
});
