import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from './task-card/task-card.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksRoutingModule } from '../views/tasks/tasks-routing.module';
import { OnboardingRoutingModule } from '../views/onboarding/onboarding-routing.module';



@NgModule({
  declarations: [
    TaskCardComponent,
    EditTaskComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TasksRoutingModule,
    OnboardingRoutingModule
  ],
  exports: [
    TaskCardComponent,
    EditTaskComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
