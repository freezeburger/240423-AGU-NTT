import { ChangeDetectionStrategy, Component, NgZone, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
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
