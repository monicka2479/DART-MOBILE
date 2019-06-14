import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,of, from } from 'rxjs';
import { Dart } from './dart';

@Injectable({
  providedIn: 'root'
})
export class DartService {insertUrl = "http://localhost:3000/dart_create";
selectUrl = "http://localhost:3000/dart_select";
constructor(private http: HttpClient) { }

create(darts: Dart[]) {
  console.log(darts.length);
  console.log(this.insertUrl);
  return this.http.post<any>(this.insertUrl, darts);
}
getDarts():Observable<any>{

  return this.http.get(this.selectUrl);
}

getDayDart(dart){
  return this.http.get("http://localhost:3000/selectSingleReport", dart);
}
}
