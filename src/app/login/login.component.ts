import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MediatorService } from '../services/mediator.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public fb: FormBuilder,
    public router: Router,
    private utility: UtilityService,
    private mediator: MediatorService
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

      let user = {
        username: this.loginForm.get('username').value
      }

      this.mediator.Action('user', user);

      this.utility.setLoader(this.loginForm.get('username').value);

      // if (this.loginForm.get('username').value == 'admin' && this.loginForm.get('password').value == 'admin') {
      this.router.navigate(['todo']);
      // }
    }
  }

  navigateToParent() {
    this.router.navigate(['parent']);
  }

  navigateToView() {
    this.router.navigate(['view']);
  }

  title = "this is title"
}

