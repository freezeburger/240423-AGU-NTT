import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FeatUserRoutingModule } from './feat-user-routing.module';
import { FeatUserCreationComponent } from './feat-user-creation/feat-user-creation.component';
import { FeatUserListComponent } from './feat-user-list/feat-user-list.component';
import { FeatUserSearchComponent } from './feat-user-search/feat-user-search.component';
import { UserService } from './user.service';



@NgModule({
  declarations: [
    FeatUserCreationComponent,
    FeatUserListComponent,
    FeatUserSearchComponent
  ],
  providers:[
    UserService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FeatUserRoutingModule
  ],
  exports: [
    FeatUserCreationComponent,
    FeatUserListComponent,
    FeatUserSearchComponent
  ]
})
export class FeatUserModule { }
