declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

// https://medium.com/@zalmoxis/redux-devtools-without-redux-or-how-to-have-a-predictable-state-with-any-architecture-61c5f5a7716f

export abstract class DevtoolsConnector {

  private devtools:any = window.__REDUX_DEVTOOLS_EXTENSION__;

  constructor(){
    //console.log(this.devtools)
    const store = this.devtools.connect()
    store.name = 'STORE_NAME'
    store.init({name:'CONNECTOR'})

    console.log(store.init)

    this.devtools.send('INIT', {value:1})
    this.devtools.send('INIT', {value:2})
    this.devtools.send('INIT', {value:3})

    store.subscribe((message:any) => {
      if (message.type === 'DISPATCH' && message.payload.type === 'JUMP_TO_ACTION') {
        console.log(message.state);
      }
    })
  }
}
