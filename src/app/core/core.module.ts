import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CorePageComponent } from './pages/core-page/core-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MobileFooterBarComponent } from './components/mobile-footer-bar/mobile-footer-bar.component';

@NgModule({
  declarations: [CorePageComponent, HeaderComponent, SideBarComponent, MobileFooterBarComponent],
  imports: [CommonModule, CoreRoutingModule],
})
export class CoreModule {}
