import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  private defauktValueInput: string;
  constructor() { 
    this.defauktValueInput = "My Name is Zakia";
  }

  ngOnInit(): void {
  }

  displayNameInputInUpperCase(){
    this.defauktValueInput.toUpperCase();

  }
}
