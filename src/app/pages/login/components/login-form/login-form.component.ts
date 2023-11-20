import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(private router: Router) {}

  // Valid email and password values
  valid_email: string = "ricksanchez@rick.com";
  valid_password: string = '123';

  // FormGroup for the login form with validators
  loginFormGroup = new FormGroup({
    email: new FormControl('ricksanchez@rick.com', [Validators.required, Validators.email]),
    password: new FormControl('123', [Validators.required])
  });

  // Function called when the login button is clicked
  onClick(): boolean {

    // Check if the entered email and password match the valid values
    if (this.valid_email == this.loginFormGroup.value.email && this.valid_password == this.loginFormGroup.value.password) {
      // Navigate to the '/home/list-characters' route if the credentials are valid
      this.router.navigate(['/home/list-characters']);
      return true;
    }
    return false;
  }
}
