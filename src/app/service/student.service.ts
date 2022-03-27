import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public  apiUrl=environment.api;

  constructor(private http: HttpClient) { }

  getTestActivities():Observable<any> {
    const url = `${this.apiUrl}/matific-test-activities`;
    return this.http.get<any>(url);
  }
  getTestClasses():Observable<any> {
    const url = `${this.apiUrl}/matific-test-classes`;
    return this.http.get<any>(url);
  }
}
