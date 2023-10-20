import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';
import { TextInputComponent } from './shared/components/text-input/text-input.component';
import { PasswordInputComponent } from './shared/components/password-input/password-input.component';
import { TextareaInputComponent } from './shared/components/textarea-input/textarea-input.component';
import { DateInputComponent } from './shared/components/date-input/date-input.component';
import { AboutComponent } from './shared/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    TextInputComponent,
    PasswordInputComponent,
    TextareaInputComponent,
    DateInputComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
