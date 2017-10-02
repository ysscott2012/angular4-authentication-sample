import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

// import services
import { AuthenticationService } from '../services/authentication.service';

// import calsses
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../authentication.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  login() {
    const user = new User();
    user.password = this.loginForm.value.password;
    user.username = this.loginForm.value.username;
    this.authenticationService.login(user).subscribe(
      data => {
        alert(data.alertMessage);
        if (data.success) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('current', JSON.stringify(data.user));
        }
      },
      error => {
        alert(error.message);
      }
    );
  }


}
