import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '@thryve-disseminate/auth/data-access';

@Component({
  selector: 'thryve-disseminate-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit{
  constructor(private registerService: RegisterService){}

  registerForm!: FormGroup;

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Email', form.value.email);
    console.log('Message', form.value.password);
     this.registerService.register(this.registerForm.value).subscribe((valid)=>{
      console.log(valid);
      return valid;
    })
  }
}
