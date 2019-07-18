import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChildren, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { LoginComponent } from './login/login.component';
import { EmailsComponent } from './emails/emails.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { OnHoverDirective } from './on-hover.directive';
import { ParagraphChangeDirective } from './paragraph.directive';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'

  },
  {
    path: 'home',
    component: HomeComponent
  }, //50min mark in video
  {
    path: 'signup',
    component: SignupFormComponent
  },
  {
    path: 'message',
    component: MessageComponent
  }
];


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
    ParagraphChangeDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes) //.forRoot is super crucial

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
