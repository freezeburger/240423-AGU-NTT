import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserCommand, UserService } from './user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ToCssLevelPipe } from './to-css-level.pipe';
import { User } from '../../../../types/interfaces/user.interface';
import { ToPrintableAddressPipe } from './to-printable-address.pipe';
import { CopyToClipboardDirective } from './copy-to-clipboard.directive';
import { EmphasisAlertDirective, EmphasisDirective } from './emphasis.directive';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { map, startWith, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    // Angular
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    // Vendors
    // Application
    ToCssLevelPipe,
    ToPrintableAddressPipe,

    CopyToClipboardDirective,
    EmphasisAlertDirective,
    EmphasisDirective,
  ],
  providers: [
    UserService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public alertMessage: AlertMessage = {
    level: 'success',
    content: 'Default Alert Message Text'
  }

  public userService = inject(UserService);

  public user: User | undefined;
  public selectedUser: User | undefined;

  searchField = new FormControl<string>('');

  filteredCollection$ = this.searchField.valueChanges.pipe(
    startWith(''),
    tap(() => this.userService.process({ type: UserCommand.LOAD_REQUEST, payload: this.searchField.value })),
    switchMap(() => this.userService.data$),
    map( (users:User[]) => {
      return users.filter(u => !this.searchField.value || u.name.includes(this.searchField.value))
    })
  )

  public selectUser(user: User): void {
    this.selectedUser = user;
  }

}

interface AlertMessage {
  level: 'success' | 'primary' | 'warning' | 'danger';
  content: string;
}
