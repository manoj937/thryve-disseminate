/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '@thryve-disseminate/auth/data-access';

@Component({
  selector: 'thryve-disseminate-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  constructor(
    private loginService: LoginService, 
    public fb: FormBuilder,
    private router: Router
  ){}

  loginForm!: FormGroup;
  dismissible = true;
  alert = false;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
      loginas: ['', Validators.required]
    });
  }

  onSubmit() {
    sessionStorage.setItem('admin', this.loginForm?.value?.loginas === 'admin' ? 'true' : 'false');
    this.loginService.login(this.loginForm.value).subscribe({
      next: (response: any) => {
        if(response?.data?.moderatorId){
            this.router.navigate(['/dashboard'])
          } else {
            this.alert = true;
          }
      },
      error: () => this.alert = true
    })
  }
}
