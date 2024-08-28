import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private httpClient: HttpClient
  ) { }

  apiUrl = "https://taskappbackend-44i6.onrender.com/api/tasks"

  getTasks() {
    return firstValueFrom(
      this.httpClient.get<any>(this.apiUrl)
    )
  }

  getTaskDetails(id: String) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.apiUrl}/${id}`)
    )
  }

  addTask(form: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.apiUrl}`, form)
    )
  }
  updateTask(id: String, update: any) {
    return firstValueFrom(
      this.httpClient.put(`${this.apiUrl}/${id}`,update)
    )
  }
  deleteTask(id: string) {
    return firstValueFrom (
      this.httpClient.delete(`${this.apiUrl}/${id}`)
    )
  }
}
