import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '@thryve-disseminate/auth/data-access';

@Component({
  selector: 'thryve-disseminate-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit{

  constructor(private loginService: LoginService, public fb: FormBuilder){}

  loginForm!: FormGroup;
  validUser!: boolean;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
      loginas: ['', Validators.required]
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Email', form.value.email);
    console.log('Message', form.value.password);
     this.loginService.login(this.loginForm.value).subscribe((valid)=>{
      console.log(valid);
      return this.validUser=Boolean(valid)
    })
  }
}
