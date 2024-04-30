import { Injectable } from '@angular/core';
import { ReactiveService } from '../../core/patterns/reactive-service';
import { User } from '../../core/interfaces/user.interface';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export enum UserCommand {
  LOAD_REQUEST,
  SEARCH_REQUEST,
  CREATE_REQUEST
}

@Injectable()
export class UserService implements ReactiveService< User[], UserCommand > {

  constructor(
    private http:HttpClient
  ) {
    if (this.data$.value.length === 0) {
      this.load();
    }
  }

  data$ = new BehaviorSubject<User[]>([]);

  process(command: { type: UserCommand.CREATE_REQUEST,payload:User}): void;
  process(command: { type: UserCommand.LOAD_REQUEST,payload:null}): void;
  process(command: { type: UserCommand; payload: unknown; }): void {
    if(command.type === UserCommand.LOAD_REQUEST){
      this.load()
    }
  }

  private load(){
    this.http.get<User[]>('http://localhost:5050/users').subscribe( (data:User[]) => this.data$.next(data) )
  }


}
