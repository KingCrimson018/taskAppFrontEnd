import { Routes } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { tokenGuardGuard } from './guards/token-guard.guard';

export const routes: Routes = [
    {path: "", redirectTo: "onboarding", pathMatch: "full"},
    {path: "onboarding", loadChildren: () => import("./views/onboarding/onboarding.module").then(m => m.OnboardingModule)},
    {path: "tasks", loadChildren: () => import("./views/tasks/tasks.module").then(m => m.TasksModule), canActivate: [tokenGuardGuard]},
    {path: "**", component: NotFoundComponent}
];
