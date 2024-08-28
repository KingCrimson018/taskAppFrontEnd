import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const tokenGuardGuard: CanActivateFn = (route, state) => {

    try {
      const router = inject(Router)

      if(localStorage.getItem("user_token") != undefined || localStorage.getItem("user_token") != null ) {
        return true
      }else {
        alert("No estas logueado manin")
        router.navigate(['onboarding/welcome'])
        return false
      }
    } catch (error) {
      console.log(error);
      return false
    }


};
