import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
@Component({
  selector: 'thryve-disseminate-ask-community',
  templateUrl: './ask-community.component.html',
  styleUrls: ['./ask-community.component.scss'],
})
export class AskCommunityComponent implements OnInit {
  qaForm: any;
 
  constructor( private fb: FormBuilder){}
    ngOnInit(){
      this.qaForm =this.fb.group({
        question: ['', Validators.required],
        description: ['', Validators.required]
      })
       
    }
    get f(): { [key: string]: AbstractControl } {
      return this.qaForm.controls;
    }
    onSubmit(){
      console.log(this.qaForm);
    }
  
  
  }
  
  