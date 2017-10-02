import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routes
import { AuthenticationRoutes } from './authentication.route';

// Services
import { AuthenticationService } from './services/authentication.service';

// Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AuthenticationRoutes
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    AuthenticationComponent,
  ],
  providers: [
    AuthenticationService
  ],
  exports: [
    AuthenticationComponent
  ]
})
export class AuthenticationModule { }
