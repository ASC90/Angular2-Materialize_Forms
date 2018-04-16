import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  regExpName = /^[a-zA-Z]{3,10}$/;
  regExpPassword = /^[a-zA-Z0-9]{3,10}$/;
  hasSubmitted = false;
  errorMsgName = '';
  errorMsgPassword = '';
  errorMsgConfirm = '';
  passwordType = 'password';
  confirmType = 'password';
  showConfirmSwitch = true;
  showPasswordSwitch = true;
  showOkey = true;
  alwaysArror = true;
  fecha = new Date('2012-11-25');
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.form = this.formBuilder.group({ lastName: new FormControl ('', Validators.compose([Validators.required, Validators.pattern(this.regExpName)])),
    password: '', confirm: '', conditions: false });
  }
  onKeyUp() {
    this.showOkey = false;
    // Errores last name
    if (this.form.controls.lastName.errors) {
      if (this.form.controls.lastName.errors.required) {
        this.errorMsgName = 'Name required';
      } else if (this.form.controls.lastName.errors.pattern) {
        this.errorMsgName = 'Need to write more than 2 characters and les than 11 & only letters';
      }
    }
    // Errores password
    if (this.form.controls.password.errors) {
      if (this.form.controls.password.errors.required) {
        this.errorMsgPassword = 'Password required';
      } else if (this.form.controls.password.errors.pattern) {
        this.errorMsgPassword = 'Need to write more than 2 characters and les than 11 & no special characters';
      }
    }
    // Error de cruz y tick de ok
    if (!this.form.controls.confirm.errors) {
      setTimeout(() => {
        this.showOkey = true;
        if (this.form.controls.confirm.valid && this.showOkey) {
          this.alwaysArror = false;
        } else {
          this.alwaysArror = true;
        }
      }, 10);
    } else {
      setTimeout(() => {
        if (this.form.controls.confirm.valid) {
          this.alwaysArror = false;
        } else {
          this.alwaysArror = true;
        }
      }, 10);
    }
    /*if (this.form.controls.confirm.valid && this.showOkey) {
      this.alwaysArror = false;
    } else {
      this.alwaysArror = true;
    }*/
    // Setear error custom
    if (!this.form.controls.confirm.errors) {
      if (this.form.controls.password.value != this.form.controls.confirm.value || this.form.controls.password.value == '') {
        this.form.controls.confirm.setErrors({ nomatch: true });
      } else {
        this.form.controls.confirm.setErrors(null);
      }
    } else if (this.form.controls.confirm.errors) {
      if (this.form.controls.confirm.errors.nomatch && this.form.controls.password.value != this.form.controls.confirm.value || this.form.controls.confirm.errors.nomatch && this.form.controls.password.value == '') {
        this.form.controls.confirm.setErrors({ nomatch: true });
      } else if (this.form.controls.confirm.errors.nomatch && this.form.controls.password.value == this.form.controls.confirm.value) {
        this.form.controls.confirm.setErrors(null);
      }
    }
    // Errores confirmación
    if (this.form.controls.confirm.errors) {
      if (this.form.controls.confirm.errors.required) {
        this.errorMsgConfirm = 'Required confirmation of the password';
      } else if (this.form.controls.confirm.errors.pattern) {
        this.errorMsgConfirm = 'Need to write more than 2 characters and les than 11 & no special characters';
      } else if (this.form.controls.confirm.errors.nomatch) {
        this.errorMsgConfirm = "The passwords does't match";
      }
    }
  }
  onSubmit() {
    this.hasSubmitted = true;
    this.onKeyUp();
    if (this.form.valid) {
      alert(JSON.stringify(this.form.value));
    }
  }
  showConfirm() {
    this.showConfirmSwitch = !this.showConfirmSwitch;
    if (this.showConfirmSwitch) {
      this.confirmType = 'password';
    } else {
      this.confirmType = 'text';
    }
    
  }
  showPassword() {
    this.showPasswordSwitch = !this.showPasswordSwitch;
    if (this.showPasswordSwitch) {
      this.passwordType = 'password';
    } else {
      this.passwordType = 'text';
    }
  }
  onAgreed(agreed: boolean) {
    console.log(agreed);
    this.form.controls.conditions.setValue(agreed);
  }
}
