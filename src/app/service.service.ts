import { Injectable } from '@angular/core';
import {environment} from '../environments/environment.development';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = environment.BaseUrl

  constructor(private http : HttpClient , public router: Router) {
  }

  getData(): Observable<any[]> {
    const url = `${this.apiUrl}/HYd96h/data`
    return this.http.get<any[]>(url)
  }

}
