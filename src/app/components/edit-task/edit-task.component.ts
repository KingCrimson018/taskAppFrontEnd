import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.scss'
})
export class EditTaskComponent {
  imgFile: any
  imgUrl: any


  @Input() task: any
  @Output() updateEvent = new EventEmitter<any>()
  form!: FormGroup


  constructor (
    private taskService: TaskService,
    private storage: AngularFireStorage
  ) {
    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl()
    }) 
    
  }



  async onSubmit() {
    console.log(this.task._id);
    
    await this.taskService.updateTask(this.task._id, this.form.value).then(res => {
      if(this.imgFile) {
        this.uploadImage(this.task._id)
      }
      this.updateEvent.emit(res)

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
    this.imgFile = $event.target.files[0]
    this.imgUrl = URL.createObjectURL(this.imgFile)
  }

}
