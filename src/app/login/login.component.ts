import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup
  constructor(private fb: FormBuilder,private userService:UsersService,  private router: Router) { 
    let formControls = {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    }
    this.loginForm = this.fb.group(formControls)
  }
  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }
  ngOnInit(): void {
    let isLoggedIn = this.userService.isLoggedIn()
    if(isLoggedIn){
     this.router.navigate(['/'])
    }
  }
  login() {
    let data = this.loginForm.value;

    this.userService.LoginUser(data).subscribe(
      res => {
        console.log(res);
        let token = res.token;
        localStorage.setItem("myToken", token);

        this.router.navigate(['/']);

      },
      err => {
        console.log(err);

      }
    )
  }

}
