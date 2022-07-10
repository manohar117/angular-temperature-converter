import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
   constructor() { }
  public value: number;
  public result: number;
  ngOnInit() {
  }
  convert(){
    this.result = this.value*9.0/5.0+32;
  }
  name = 'Angular 7';
}
