import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  {path: "", redirectTo: "my_tasks", pathMatch: 'full'},
  {path: "my_tasks", component: MyTasksComponent},
  {path: "add_task", component: AddTaskComponent},

  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
