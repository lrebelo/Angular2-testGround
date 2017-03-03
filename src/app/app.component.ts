import { Component } from '@angular/core';

@Component({
  selector: 'base-app',
  template: `
  <navbar></navbar>
  <router-outlet>
  <footer-comp></footer-comp>
  `,
})
export class AppComponent  {

}
