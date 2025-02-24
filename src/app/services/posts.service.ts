
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  // Función para obtener los eventos en vivo
  getPost() {
    return this.http.get<any>('https://www.thesportsdb.com/xml/v2_livescore_example.json');  // Cambia 'URL_DE_TU_API' por la URL de tu API
  }
}
