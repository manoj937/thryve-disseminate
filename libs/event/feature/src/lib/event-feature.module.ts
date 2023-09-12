import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event/event.component';
import { Route, RouterModule } from '@angular/router';
import { EventsWidgetComponent } from './events-widget/events-widget.component';
import { EventsListComponent } from './events-list/events-list.component';

const routes: Route[] = [
  {
    path: '',
    component: EventComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [EventComponent, EventsWidgetComponent, EventsListComponent],
  exports: [EventComponent, RouterModule, EventsWidgetComponent],
})
export class EventFeatureModule {}
