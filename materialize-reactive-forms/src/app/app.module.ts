import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterializeDirective } from "angular2-materialize";


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';
import { PasswordDirective } from './password.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ModalComponent,
    MaterializeDirective,
    PasswordDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
