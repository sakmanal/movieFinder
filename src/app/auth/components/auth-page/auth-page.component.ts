import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    // redirect to home screen if user is logged in
      this.authService.getCurrentUser().subscribe(
        user => {
          if (user) {
            this.router.navigate(['/']);
          }
        }
      );
   }

  ngOnInit() {
  }

}
