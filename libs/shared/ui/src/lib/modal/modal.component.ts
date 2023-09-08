import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'thryve-disseminate-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit{
  title: string | null = null;

  constructor(
    public modalRef: MdbModalRef<ModalComponent>,
    private router: Router,
    public fb: FormBuilder
  ){}

  categories = ['public', 'business', 'technical', 'support', 'fund raising', 'others'];
  communityForm!: FormGroup;
  dismissible = true;
  alert = false;

  ngOnInit() {
    this.communityForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      type: ['', Validators.required],
      moderators: ['', Validators.required],
      tags: ['', Validators.required]
    });
  }

  onSubmit() {
    this.modalRef.close(this.communityForm);
  }
}
