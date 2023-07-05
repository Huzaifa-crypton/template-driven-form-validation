import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }