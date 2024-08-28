import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {

  imgFile: any
  imgUrl: any

  form!: FormGroup

  constructor(
    private taskService: TaskService,
    private router: Router,
    private storage: AngularFireStorage
  ) {
    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      imgUrl: new FormControl()
    })
  }

  async onSubmit() {
    await this.taskService.addTask(this.form.value).then(res => {
      this.uploadImage(res._id)
      this.router.navigate(['tasks/my_tasks'])
    })
  }

  uploadImage(id: string) {
    this.storage.upload(`tasks/${id}/taskPhoto/taskPhoto`, this.imgFile).then(() => {
      this.storage.ref(`tasks/${id}/taskPhoto`).listAll().subscribe(async imgs => {
        const imgUrl = await imgs.items[0].getDownloadURL()
        this.taskService.updateTask(id,{imgUrl : imgUrl})
        
      })
    })
  }
  previewImage($event: any) {
    console.log($event.target.files[0]);
    this.imgFile = $event.target.files[0]
    this.imgUrl = URL.createObjectURL(this.imgFile)


  
  }
}
