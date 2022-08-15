import { Injectable } from '@angular/core';
import { Education } from '../models/education';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class EducationService {
  private resourceURL = ' http://localhost:8080/education/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.resourceURL + "all");
  }

  save(educacion: Education): Observable<any> {
    return this.httpClient.post<any>(this.resourceURL + 'create', educacion);
  }

  delete(education: Education): Observable<Education> {
    return this.httpClient.delete<Education>(this.resourceURL + '/delete/' + education.id);

  }
}
