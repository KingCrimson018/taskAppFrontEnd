import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {

  @Input() task: any
  @Output() deleteEvent = new EventEmitter<any>()
  @Output() updatedEvent = new EventEmitter<any>()

  taskService = inject(TaskService)

    
  


  async deleteTask() {
    await this.taskService.deleteTask(this.task._id).then((res) => {
      this.deleteEvent.emit(res)
    })
  }

  taskUpdatedEvent ($event: any) {
    this.updatedEvent.emit($event)
  }

}
