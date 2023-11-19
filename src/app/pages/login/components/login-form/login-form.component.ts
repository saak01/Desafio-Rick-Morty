import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(private router: Router){}

  valid_email: string = "ricksanchez@rick.com";
  valid_password: string = '123';

  loginFormGroup = new FormGroup(
    {
      email: new FormControl('ricksanchez@rick.com',[Validators.required,Validators.email,]),
      password: new FormControl('123',[Validators.required])
    }
  );

  onClick(): boolean{

    if(this.valid_email == this.loginFormGroup.value.email && this.valid_password == this.loginFormGroup.value.password){
      this.router.navigate(['/home/list-characters'])
      return true;
    }
    return false;
  }
}
