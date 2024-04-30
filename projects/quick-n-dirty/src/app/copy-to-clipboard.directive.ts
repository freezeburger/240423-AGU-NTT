import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]',
  standalone: true
})
export class CopyToClipboardDirective {

  @HostBinding('style.cursor') private cursor ='copy';
  @HostBinding('attr.title') private title ='Copy To Clipboard !';
  @HostBinding('style.backgroundColor') private backgroundColor!:string;
  @HostBinding('style.borderRadius') private borderRadius = '10px';
  @HostBinding('style.padding') private padding = '10px';
  @HostBinding('style.transition') private transition = 'background-color .3s ease';

  private element = inject(ElementRef<HTMLElement>)

  ngOnInit(){
    console.log(this.element)
  }

  @HostListener('click')
  private copy(){
    navigator.clipboard.writeText( this.element.nativeElement.innerText.trim());
    this.cursor = 'context-menu';
    this.backgroundColor = 'var(--color-main)';
  }

}
