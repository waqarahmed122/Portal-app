import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  getuniversity() {
    throw new Error('Method not implemented.');
  }
  constructor(public httpClient: HttpClient) {}
  getUser(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:3000/cc');
  }
  getstudent(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:3000/st');
  }
  getUni(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:3000/university');
  }
  postUni(data: any): Observable<any> {
    return this.httpClient.post<any>('http://127.0.0.1:3000/uni', data);
  }
  poststudent(data: any): Observable<any> {
    return this.httpClient.post<any>('http://127.0.0.1:3000/student', data);
  }
  postUser(data: any): Observable<any> {
    return this.httpClient.post<any>('http://127.0.0.1:3000/c', data);
  }
}
