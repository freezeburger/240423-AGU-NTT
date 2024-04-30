import { distinctUntilChanged, tap } from "rxjs";
import { ReactiveService } from "../../../../types/patterns/reactive-service";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

interface Devtools {
  open: Function;
  updateStore: Function;
  notifyErrors: Function;
  send: Function;
  listen: Function;
  connect: Function;
  disconnect: Function;
}

interface DevtoolsStore {
  init: Function;
  subscribe: Function;
  unsubscribe: Function;
  send: Function;
  error: Function;
}

interface ConstructableReactiveService { new(...args: any[]): ReactiveService<any, any> }

let IncrementalID = 0;

export function RSDevtoolsConnector(constructor: ConstructableReactiveService) {

  return class extends constructor {
    devtools: Devtools = window.__REDUX_DEVTOOLS_EXTENSION__;
    store: DevtoolsStore = this.devtools.connect({ name: `Service ${this.constructor.name} ${++IncrementalID}` });

    initialized = false;

    unsubscribe = this.store.subscribe((message: any) => {
      if (message.type === 'DISPATCH' && message.payload.type === 'JUMP_TO_ACTION') {
        console.log(message.state)
      }
    })

    state$ = this.data$.pipe(
      distinctUntilChanged((prev, current) => {
        console.log(prev, current)
        return JSON.stringify(prev) === JSON.stringify(current)
      }),
      tap(state => {
        if (this.initialized) {
          this.devtools.send('UPDATE', state);
        } else {
          this.initialized = true;
          this.store.init(state);
        }
      }),
    ).subscribe();

  } as any;
}
