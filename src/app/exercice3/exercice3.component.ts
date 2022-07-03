import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component {

  status: boolean = true;

  constructor() { 
  }

  changerParagraph() : void {
    this.status = !this.status;
  }


}
