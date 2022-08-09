import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <p>
      <button *ngIf="value">{{value}}</button>
    </p>
  `,
  styles: [
  ]
})
export class SquareComponent {

  @Input() value!: 'X' | 'O';

}
