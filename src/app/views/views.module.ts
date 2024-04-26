import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewsRoutingModule } from './views-routing.module';
import { ViewUserListComponent } from './view-user-list/view-user-list.component';
import { ViewUserEditComponent } from './view-user-edit/view-user-edit.component';
import { FeatUserModule } from '../features/feat-user/feat-user.module';

@NgModule({
  declarations: [
    ViewUserListComponent,
    ViewUserEditComponent
  ],
  imports: [
    FeatUserModule,
    CommonModule,
    ViewsRoutingModule
  ],
  exports: [
    ViewUserListComponent,
    ViewUserEditComponent
  ]
})
export class ViewsModule { }
