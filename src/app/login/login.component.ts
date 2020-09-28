import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    public router: Router
  ) { }

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit(loginForm) {
    if (this.loginForm.valid) {
      if (this.loginForm.get('username').value == 'admin' && this.loginForm.get('password').value == 'admin') {
        this.router.navigate(['todo']);
      }
    }
  }
}

