import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

    
  constructor(private elem:ElementRef){}

  @HostListener("mouseenter") onMouseEnter(){
    this.textDeco("line-through")
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.textDeco("None")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
}