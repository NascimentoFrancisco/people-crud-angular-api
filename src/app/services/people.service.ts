import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Peolpe } from '../models/people/peolpe.model';

const baseUrl = 'api';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private http: HttpClient) {}
  
  create(data: any): Observable<any>{
    return this.http.post(`${baseUrl}people/create/`, data);
  } 

  getAll(): Observable<Peolpe[]>{
    return this.http.get<Peolpe[]>(`${baseUrl}people/list/`);
  }

  get(id: any): Observable<Peolpe>{
    return this.http.get<Peolpe>(`${baseUrl}people/detail/${id}/`);
  }

  update(id: any, data: any): Observable<any>{
    return this.http.put(`${baseUrl}people/update/${id}/`, data);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}people/delete/${id}/`);
  }
}
