import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {

  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  handleSubmit(): void {
    if (this.loginForm.invalid) {
      window.alert('Please enter a valid email and password')
    } else {
      this.router.navigate(['home'])
    }
  }

}
