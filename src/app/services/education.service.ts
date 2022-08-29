import { Injectable } from '@angular/core';
import { Education } from '../models/education';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})


export class EducationService {
  private resourceURL = ' https://porfolio-rua.herokuapp.com/education/';

  constructor(private httpClient: HttpClient, private _snackBar: MatSnackBar) { }

  getAll(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.resourceURL + "all");
  }

  save(educacion: Education): Observable<any> {
    this.openSnackBar("Guardado Exitoso!")
    return this.httpClient.post<any>(this.resourceURL + 'create', educacion);

  }

  delete(education: Education): Observable<Education> {
    this.openSnackBar("Elemetno Eliminado!")
    return this.httpClient.delete<Education>(this.resourceURL + 'delete/' + education.id);

  }

  openSnackBar(text:string) {
    this._snackBar.open(text, 'X', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
}
}
