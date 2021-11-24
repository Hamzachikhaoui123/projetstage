import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder,private router:Router,private UserService:UsersService) { 
    let formControls = {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z][a-z .'-]+"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Z][a-z .'-]+"),
        Validators.minLength(2)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      repassword: new FormControl('', [
        Validators.required
      ])
    }
    this.registerForm = this.fb.group(formControls)
  }

  ngOnInit(): void {
    let isLoggedIn =  this.UserService.isLoggedIn()
    if(isLoggedIn){
      this.router.navigate(['/']);
    }
  }
  register() {
    let data = this.registerForm.value
    this.UserService.registerUser(data).subscribe(
      res => {
       
        this.router.navigate(['/login'])
      },
      err => {
        console.log(err);

      }
    )
   

  }

}
