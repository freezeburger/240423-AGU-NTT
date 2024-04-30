import {  Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ReactiveService } from '../../../../types/patterns/reactive-service';
import { User } from '../../../../types/interfaces/user.interface';
import { RSDevtoolsConnector } from './devtools.decorator';

export enum UserCommand {
  LOAD_REQUEST = 'UserCommand:LOAD_REQUEST',
  SEARCH_REQUEST = 'UserCommand:SEARCH_REQUEST',
  CREATE_REQUEST = 'UserCommand:CREATE_REQUEST',
}

@RSDevtoolsConnector
@Injectable()
export class UserService implements ReactiveService< User[], UserCommand >  {

  constructor(
    private http:HttpClient
  ) {
  }

  data$ = new BehaviorSubject<User[]>([]);

  process(command: { type: UserCommand; payload: unknown; }): void {
    if(command.type === UserCommand.LOAD_REQUEST) this.load(command.payload)
  }

  private load( name:unknown ){
    this.http.get<User[]>('http://localhost:5050/users?name=' + name).subscribe(data => this.data$.next(data) )
  }

}
