import { Component } from '@angular/core';
import { AuthService } from './services/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public title = 'spotifyer';

  constructor(public Auth: AuthService) {
    // handle this
  }

  /**
   *
   */
  login() {
    const user = this.Auth.login();

    console.log(user);
  };
}
