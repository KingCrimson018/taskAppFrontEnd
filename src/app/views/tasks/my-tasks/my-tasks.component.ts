import { Component } from '@angular/core';
import { TaskService } from '../../../services/task.service';


@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrl: './my-tasks.component.scss'
})
export class MyTasksComponent {
  tasks: any[] = []

  constructor(
    private taskService: TaskService,
  
  ) {

  }
  ngOnInit(): void {
    this.getTasks()
    
    
  }

  async getTasks() {
    await this.taskService.getTasks().then(res => {
      this.tasks = res
    })
  }


  taskDeleted($event: any) {
    this.tasks = this.tasks.filter(task => task._id !== $event._id)
  }

  taskUpdated($event: any) {
    this.getTasks()
    
  }

}
