import { Component } from '@angular/core';


class Hero {
  
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
    ) {  }
    
  }
  @Component({
    selector: 'app-template-driven',
    templateUrl: './template-driven.component.html',
    styleUrls: ['./template-driven.component.css']
  })
export class TemplateDrivenComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  formEmail = "";
  formPassword = "";
  onSubmit() { }

  newHero() {
    this.model = new Hero(42, '', '');
  }
}