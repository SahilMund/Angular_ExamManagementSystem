import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './core/user-login/user-login.component';
import { ShowAllTestComponent } from './my-test/show-all-test/show-all-test.component';
import { ShowMyTestComponent } from './my-test/show-my-test/show-my-test.component';
import { CourseService } from './services/course.service';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ShowAllTestComponent,
    ShowMyTestComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
