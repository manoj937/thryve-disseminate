/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from '@thryve-disseminate/shared/ui';

@Component({
  selector: 'thryve-disseminate-admin-communities',
  templateUrl: './admin-communities.component.html',
  styleUrls: ['./admin-communities.component.scss'],
})
export class AdminCommunitiesComponent {
  @Input() communityList: any;
  @Output() delete = new EventEmitter<string>();
  @Output() add = new EventEmitter<any>();

  modalRef: MdbModalRef<ModalComponent> | null = null;

  constructor(private modalService: MdbModalService) {}

  openModal() {
    this.modalRef = this.modalService.open(ModalComponent, {
      data: { title: 'Add Community' },
    });
    this.modalRef?.onClose.subscribe((data) => {
      if (data.value) {
        this.add.emit(data.value);
      }
    });
  }

  deleteCommunity(id: string) {
    this.delete.emit(id);
  }
}
