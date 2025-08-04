import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appFocusMe]',
  standalone: false
})
export class FocusMe implements OnInit {

  constructor(
    private el: ElementRef
  ) {
    if (!el.nativeElement['focus']) {
      throw new Error("Este elemento no acepta foco");
    }
  }

  ngOnInit(): void {
    const input: HTMLInputElement = this.el.nativeElement as HTMLInputElement;
    input.focus();
    // input.select();
  }

}
