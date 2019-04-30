import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input() defaultColor: string = 'transparent';
  @Input('appHighlight')  highlightColor: string = 'blue';


  @HostBinding('style.backgroundColor') backgroundColor: string;


  constructor(private elemRef: ElementRef , private rederer: Renderer2) { }

  ngOnInit() {
    // this.rederer.setStyle(this.elemRef.nativeElement, 'color', 'blue');
    this.backgroundColor =  this.defaultColor;
  }
  @HostListener('mouseover') mouseOver(event: Event) {
    // this.rederer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeave(event: Event) {
    // this.rederer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;

  }

}
