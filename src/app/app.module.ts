import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { EmailsComponent } from './emails/emails.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { OnHoverDirective } from './on-hover.directive';
import { ParagraphChangeDirective } from './paragraph.directive';


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    LoginComponent,
    EmailsComponent,
    NavBarComponent,
    SidebarComponent,
    SignupFormComponent,
    OnHoverDirective,
    ParagraphChangeDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
