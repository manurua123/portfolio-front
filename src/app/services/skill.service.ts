import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})


export class SkillService {
  private resourceURL = ' http://localhost:8080/skill/';

  constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar) { }

  getAll(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.resourceURL + "all");
  }

  save(educacion: Skill): Observable<any> {
    this.openSnackBar("Guardado Exitoso!")
    return this.httpClient.post<any>(this.resourceURL + 'create', educacion);

  }

  delete(skill: Skill): Observable<Skill> {
    this.openSnackBar("Elemetno Eliminado!")
    return this.httpClient.delete<Skill>(this.resourceURL + 'delete/' + skill.id);

  }

  openSnackBar(text:string) {
    this._snackBar.open(text, 'X', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
}
}
