import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  payload : any = jwtDecode(localStorage.getItem("user_token")!)
  
  router = inject(Router)
  ngOnInit(): void {
    
  }

  signOut() {
    localStorage.removeItem("user_token")
    this.router.navigate(['onboarding/signin'])
  }
}
