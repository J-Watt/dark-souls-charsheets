import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dark Souls Charsheets';
  // background = "";

    ngOnInit(): void {
  }

  // generateBackground(): void {
  //   let bg = Math.floor(Math.random() * 10);
  //   switch (bg) {
  //     case 1:
  //       this.background = "";
  //       break;
  //     case 2:
  //       this.background = "";
  //       break;
  //     default:
  //       this.background = "";
  //   }
  // }
}
