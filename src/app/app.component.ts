import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sonar-test';

  tITLE = "I'm an evil title string!";

  doIt() {
    if (true) {
      console.log("I'm doing it!");
    }

    // TODO: Remove this
  }
}
