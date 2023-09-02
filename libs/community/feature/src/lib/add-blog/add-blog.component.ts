import { Component, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
@Component({
  selector: 'thryve-disseminate-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.scss'],
})
export class AddBlogComponent implements OnInit {
  blogForm: any;
 
constructor( private fb: FormBuilder){}
  ngOnInit(){
    this.blogForm =this.fb.group({
      title: ['', Validators.required],
      display_image: ['', Validators.required],
      content: ['', Validators.required]
    })

  }
  get f(): { [key: string]: AbstractControl } {
    return this.blogForm.controls;
  }
  onSubmit(){
    console.log(this.blogForm);
  }


}

