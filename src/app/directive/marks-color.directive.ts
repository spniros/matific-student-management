
import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
  selector: '[appMarksColor]'
})
export class MarksColorDirective {
  @Input() marks: number | undefined;
  



  constructor(private el: ElementRef) {
    
   }

 
   ngOnChanges() {
   
     this.highlight(this.marks)
     
   }

 

  


  private highlight(marks:any) {
    
    if(marks >= 90){
      this.el.nativeElement.style.color = "green";
    }
    else if(marks < 90 && marks >= 80){
      this.el.nativeElement.style.color = "orange";
    }
    else if(marks < 80 && marks >= 60){
      this.el.nativeElement.style.color = "red";
    }
   else if(marks < 60 && marks >= 0){
    this.el.nativeElement.style.color = "grey";
    }
    
  }
}
