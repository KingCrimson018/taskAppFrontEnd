import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  form!: FormGroup

  constructor (
    private userService: UserService,
    private router: Router
  ) {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    })
  }

  async onSubmit() {
    await this.userService.signIn(this.form.value).then(res => {
      if(res.message) {
        alert(res.message)
      }else{
        localStorage.setItem("user_token", res.token)
        this.router.navigate(['tasks/my_tasks'])
      }

    }) 
  }
}
