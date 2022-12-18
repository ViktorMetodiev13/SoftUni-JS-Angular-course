import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  get isLogged() {
    return this.authservice.isLoggedIn;
  }

  get user() {
    return this.authservice.user
  }

  constructor(private authservice: AuthService, private router: Router) { }
}
