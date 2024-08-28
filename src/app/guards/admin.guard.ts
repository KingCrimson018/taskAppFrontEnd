import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

export const adminGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)

  const payload : any = jwtDecode(localStorage.getItem("user_token")!)
  if(payload.role == "admin" ) {
    return true
  }else {
    alert("No eres Admin para estar aqui")
    router.navigate(['tasks/my_tasks'])
    return false;
  }

};
