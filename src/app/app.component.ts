import {  Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  time = Date.now();


  constructor(){
    setInterval(this.tick , 1000)
  }

  private tick = () => {
    this.time = Date.now();
    console.log(this.time)
  }
}
