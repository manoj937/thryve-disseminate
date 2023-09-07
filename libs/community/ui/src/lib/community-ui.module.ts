import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCommunitiesComponent } from './admin-communities/admin-communities.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { SharedUiModule } from '@thryve-disseminate/shared/ui';

@NgModule({
  imports: [CommonModule, MdbModalModule, SharedUiModule],
  declarations: [AdminCommunitiesComponent],
  exports: [AdminCommunitiesComponent]
})
export class CommunityUiModule {}
