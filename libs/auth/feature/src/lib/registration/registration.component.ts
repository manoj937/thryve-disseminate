import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '@thryve-disseminate/auth/data-access';

@Component({
  selector: 'thryve-disseminate-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit{
  constructor(
    private registerService: RegisterService,
    private router: Router,
    public fb: FormBuilder
  ){}

  registerForm!: FormGroup;
  dismissible = true;
  alert = false;

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [],
      email: [],
      password: [],
      loginas: ['', Validators.required]
    });
  }

  onSubmit() {
    this.registerService.register(this.registerForm.value).subscribe({
      next: (response: any) => {
        this.alert = true;
        console.log(response)
      },
      error: (e) => console.log(e)
    })
  }

  login(){
    this.router.navigate(['/login'])
  }
}
