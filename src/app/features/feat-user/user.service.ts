import { Inject, Injectable } from '@angular/core';
import { ReactiveService } from '../../core/patterns/reactive-service';
import { User } from '../../core/interfaces/user.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export enum UserCommand {
  LOAD_REQUEST,
  SEARCH_REQUEST,
  CREATE_REQUEST
}

@Injectable()
export class UserService implements ReactiveService< User[], UserCommand > {

  constructor(
    // @Inject(HttpClient) private http:HttpClient
    private http:HttpClient
  ) {
    this.load()
  }

  data$ = new BehaviorSubject<User[]>([]);

  process(command: { type: UserCommand; payload: unknown; }): void {
    throw new Error('Method not implemented.');
  }

  private load(){
    this.http.get<User[]>('http://localhost:5050/users').subscribe(data => this.data$.next(data) )
  }

}
