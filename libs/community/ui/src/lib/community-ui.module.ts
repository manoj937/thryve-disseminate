import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCommunitiesComponent } from './admin-communities/admin-communities.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AdminCommunitiesComponent],
  exports: [AdminCommunitiesComponent]
})
export class CommunityUiModule {}
