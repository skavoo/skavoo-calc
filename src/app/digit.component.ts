import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  SimpleChange,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'digit-component',
  template: `
    <table class="digit-table">
      <thead>
        <tr>
          <th *ngFor="let column of digits"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td *ngFor="let list of digits">
            {{ list }}
          </td>
        </tr>
      </tbody>
    </table>
  `,
  styleUrls: ['./app.component.css']
})
export class DigitComponent implements OnChanges, OnInit {
  @Input() numero: number;
  digits: string[] = [];

  ngOnInit() {
    console.log('OnInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    this.digits = [];
    console.log(changes);
    if (!changes.numero.firstChange) {
      for (const propName in changes) {
        const change = changes[propName];
        const to = JSON.stringify(change.currentValue);
        const from = JSON.stringify(change.previousValue);

        for (var j = 0, len = 4 - to.length; j < len; j += 1) {
          this.digits.push('\u00A0\u00A0');
        }

        for (var i = 0, len = to.length; i < len; i += 1) {
          if (to.charAt(i) === '.') {
            this.digits.push(',');
          } else {
            this.digits.push(to.charAt(i));
          }
        }
      }
    }
  }
}
