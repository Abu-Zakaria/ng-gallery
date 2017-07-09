
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[photo-shadow]'

})

export class PhotoShadow
{
  public isHovered: boolean = false;

  constructor(private el: ElementRef)
  {
    
  }
  
  @HostListener('mouseleave')
  onMouseLeave()
  {
    this.hovered(false)
  }

  @HostListener('mouseenter')
  onMouseEnter()
  {
    this.hovered(true)
  }

  public hovered(toggle: boolean)
  {
    if (toggle)
    {
      this.changeOpacity(1);
    }
    else
    {
      this.changeOpacity(0);
    }
  }

  private changeOpacity(value: number)
  {
    this.el.nativeElement.style.opacity = value;
  }
}


