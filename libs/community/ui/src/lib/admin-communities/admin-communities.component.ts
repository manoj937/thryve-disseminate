import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'thryve-disseminate-admin-communities',
  templateUrl: './admin-communities.component.html',
  styleUrls: ['./admin-communities.component.scss'],
})
export class AdminCommunitiesComponent {
  @Input() communityList: any;
  @Output() delete = new EventEmitter<string>();

  deleteCommunity(id: string){
    this.delete.emit(id);
  }
}
