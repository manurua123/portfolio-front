import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class SkillService {
  private resourceURL = ' http://localhost:8080/skill/';

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.resourceURL + "all");
  }

  save(educacion: Skill): Observable<any> {
    return this.httpClient.post<any>(this.resourceURL + 'create', educacion);

  }

  delete(skill: Skill): Observable<Skill> {
    return this.httpClient.delete<Skill>(this.resourceURL + '/delete/' + skill.id);

  }
}
