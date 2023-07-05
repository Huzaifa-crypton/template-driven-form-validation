import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  reactiveForm:FormGroup | any;
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(4),
        Validators.email,
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(8),
      ]),
      
    });
  
  }
  get email() { return this.reactiveForm.get('email'); }

  get password() { return this.reactiveForm.get('password'); }
 }