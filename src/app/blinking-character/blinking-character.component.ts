import {Component, Input, OnInit} from '@angular/core';
import {isNullOrUndefined} from 'util';

@Component({
  selector: 'app-blinking-character',
  templateUrl: './blinking-character.component.html',
  styleUrls: ['./blinking-character.component.css']
})
export class BlinkingCharacterComponent implements OnInit {
  @Input() charList: string[];
  @Input() delay: number;

  private currentIndex = 0;
  protected currentChar: string;

  constructor() { }

  ngOnInit() {
    if (!isNullOrUndefined(this.charList) && this.charList.length !== 0) {
      this.currentChar = this.charList[0];

      if (this.charList.length > 1) {
        setInterval(() => {
          this.currentIndex += 1;

          if (this.currentIndex === this.charList.length) {
            this.currentIndex = 0;
          }

          this.currentChar = this.charList[this.currentIndex];
        }, this.delay);
      }
    }

  }

}
