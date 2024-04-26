import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appEmphasis]:not(.alert)',
  standalone: true
})
export class EmphasisDirective {
  @HostBinding('class') private emphasis = 'emphasis';
}

@Directive({
  selector: '.alert[appEmphasis]',
  standalone: true
})
export class EmphasisAlertDirective {
  @HostBinding('class') private emphasis = 'emphasis-alert';
}

