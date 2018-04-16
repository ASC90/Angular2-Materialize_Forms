import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { Validator, AbstractControl, FormControl } from '@angular/forms';


@Directive({
  selector: '[appPassword]'
})
export class PasswordDirective {
  @Input() passwordStr: string;
  @Input() thisObjControl: FormControl;
  @Output() doMatch = new EventEmitter();
  constructor(public el: ElementRef) {
  }
  @HostListener('keyup') onKeyUp() {
    if (!this.thisObjControl.errors) {
      if (this.passwordStr != this.el.nativeElement.value || this.passwordStr == '') {
        console.log('match');
        this.thisObjControl.setErrors({ nomatch: true });
      } else {
        console.log('not match');
        this.thisObjControl.setErrors(null);
      }
    } else if (this.thisObjControl.errors) {
      if (this.thisObjControl.errors.nomatch && this.passwordStr != this.el.nativeElement.value || this.thisObjControl.errors.nomatch && this.passwordStr == '') {
        console.log('match');
        this.thisObjControl.setErrors({ nomatch: true });
      } else if (this.thisObjControl.errors.nomatch && this.passwordStr == this.el.nativeElement.value) {
        console.log('not match');
        this.thisObjControl.setErrors(null);
      }
    }
  }
}
