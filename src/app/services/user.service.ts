import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient,
  ) {

  }

  apiUrl = "https://taskappbackend-44i6.onrender.com/api/users"

  signUp(form : any) {
    return firstValueFrom(
      this.httpClient.post<any>(this.apiUrl, form)
    )
  }

  signIn(credentials: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.apiUrl}/signin`, credentials)
    )
  }

  getUsers() {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.apiUrl}`)
    )
  }
  updateUser(id: string, update: any) {
    return firstValueFrom(
      this.httpClient.put<any>(`${this.apiUrl}/${id}`, update)
    )
  }



}
