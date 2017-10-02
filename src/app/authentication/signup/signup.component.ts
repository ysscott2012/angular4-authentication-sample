import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

// import services
import { AuthenticationService } from '../services/authentication.service';

// import calsses
import { User } from '../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../authentication.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  public user = new User();

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {

    this.signupForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  signup() {
    this.user.password = this.signupForm.value.password;
    this.user.username = this.signupForm.value.username;
    this.authenticationService.signup(this.user)
      .subscribe(
      data => {
        alert(data.alertMessage);
      },
      error => {
        alert(error.alertMessage);
      }
    );
  }

}
