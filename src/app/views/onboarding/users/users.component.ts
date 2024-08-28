import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  users: any

  constructor (
    private userService: UserService,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.getUsers()
  }

  async getUsers() {
   await this.userService.getUsers().then(res => {
      console.log(res);
      
      if (res.message == "No Token") {
        alert("No token on file")
        this.router.navigate(['onboarding/welcome'])
      }else {
        this.users = res
      }
    })
  }

}
