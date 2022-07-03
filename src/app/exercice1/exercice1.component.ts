import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component {

  defauktValueInput: string;
  comment: string;
  constructor() { 
    this.defauktValueInput = "My Name is Zakia";
    this.comment = "blablabla";
  }

  displayNameInputInUpperCase(){
    this.defauktValueInput = this.defauktValueInput.toUpperCase();

  }
}
