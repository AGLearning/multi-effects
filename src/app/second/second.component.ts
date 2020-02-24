import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <p>
      second works!
    </p>
    <data id="second"></data>
  `,
  styles: []
})
export class SecondComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
