import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})


export class ExperienceService {
  private resourceURL = ' http://localhost:8080/experience/';

  constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar) { }

  getAll(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.resourceURL + "all");
  }

  save(educacion: Experience): Observable<any> {
    this.openSnackBar("Guardado Exitoso!")
    return this.httpClient.post<any>(this.resourceURL + 'create', educacion);

  }

  delete(experience: Experience): Observable<Experience> {
    this.openSnackBar("Elemetno Eliminado!")
    return this.httpClient.delete<Experience>(this.resourceURL + 'delete/' + experience.id);

  }

  openSnackBar(text:string) {
    this._snackBar.open(text, 'X', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
