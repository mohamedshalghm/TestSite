import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    .jumbotron{
      box-shadow:0 2px 0 rgba(0,0,0,0.2);
      background:#eee;
    }
  `],
  template: `
    <div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <p>{{ message }}</p>
    </div>
  `
})
export class AppComponent {
  message = 'This is the sample message.';
}