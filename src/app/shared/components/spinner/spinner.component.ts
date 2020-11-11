import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  @Input() size = 60;
  @Input() color = '#fff';
  @Input() animationDuration = 2000;

  animationBaseName = 'spring-spinner-animation';
  currentAnimationName = '';

  constructor() { }

  ngOnInit() {
  }

  get spinnerStyle(): object {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`
    };
  }

  get spinnerPartStyle(): object {
    return {
      height: `${this.size / 2}px`,
      width: `${this.size}px`
    };
  }

  get rotatorStyle(): object {
    return {
      height: `${this.size}px`,
      width: `${this.size}px`,
      borderRightColor: this.color,
      borderTopColor: this.color,
      borderWidth: `${this.size / 7}px`,
      animationDuration: `${this.animationDuration}ms`,
      animationName: this.currentAnimationName
    };
  }

}
