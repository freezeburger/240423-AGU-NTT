import { Component, inject } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-feat-user-list',
  templateUrl: './feat-user-list.component.html',
  styleUrl: './feat-user-list.component.scss'
})
export class FeatUserListComponent {

  public userService = inject(UserService);
}
