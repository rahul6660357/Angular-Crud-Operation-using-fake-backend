import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) {
  }

  private url;

  getAllEmployees(): Observable<any> {
    this.url = ' http://localhost:3000/employees';
    return this.http.get<any>(this.url);
  }

  AddEmployee(value: any): Observable<any> {
    return this.http.post<any>('http://localhost:3000/employees', value);
  }

  getById(id) {
    return this.http.get('http://localhost:3000/employees/' + id);
  }

  Updateuser(empdata: any) {
    return this.http.put('http://localhost:3000/employees/' + empdata.id, empdata);
  }

  DeleteEmployee(id: number) {
    return this.http.delete('http://localhost:3000/employees/' + id);
  }
}
