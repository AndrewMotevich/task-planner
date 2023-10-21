import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFooterBarComponent } from './mobile-footer-bar.component';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
