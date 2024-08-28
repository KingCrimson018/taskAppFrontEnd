import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  imgFile: any
  imgUrl: any

  form!: FormGroup
  
  constructor (
    private userService: UserService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      imgUrl: new FormControl()
    })
  }

  async onSubmit() {
    await this.userService.signUp(this.form.value).then(async res => {
      localStorage.setItem("user_token", res.token)
      const payload: any = jwtDecode(res.token)
      this.uploadImage(payload._id)
      this.router.navigate(['tasks/my_tasks'])
    })
  }

  uploadImage(id: string) {
    this.storage.upload(`users/${id}/profilePhoto/profilePhoto`, this.imgFile).then(() => {
      this.storage.ref(`users/${id}/profilePhoto`).listAll().subscribe(async imgs => {
        const imgUrl = await imgs.items[0].getDownloadURL()
        this.userService.updateUser(id,{imgUrl : imgUrl})
        
      })
    })
  }

  previewImage($event: any) {
    console.log($event.target.files[0]);
    this.imgFile = $event.target.files[0]
    this.imgUrl = URL.createObjectURL(this.imgFile)

  
  }
}
