import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '@thryve-disseminate/auth/data-access';

@Component({
  selector: 'thryve-disseminate-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit{
  constructor(private registerService: RegisterService, public fb: FormBuilder){}

  registerForm!: FormGroup;

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [],
      email: [],
      password: [],
      loginas: ['', Validators.required]
    });
  }

  onSubmit() {
    this.registerService.register(this.registerForm.value).subscribe((valid)=>{
      console.log(valid);
      return valid;
    })
  }
}
