import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private urlApi = 'https://jsonplaceholder.typicode.com/posts/'

  constructor(
    private http: HttpClient
  ) { }

  obtenerDatos(){
    return this.http.get(this.urlApi)
  }
  
}
