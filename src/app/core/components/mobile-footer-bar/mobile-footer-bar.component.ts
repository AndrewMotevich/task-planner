import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideBarComponent } from '@app/core/components/side-bar/side-bar.component';

@Component({
  selector: 'app-mobile-footer-bar',
  templateUrl: './mobile-footer-bar.component.html',
  styleUrls: ['./mobile-footer-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileFooterBarComponent extends SideBarComponent {}
