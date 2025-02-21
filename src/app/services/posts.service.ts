import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  //funcion para la api
  getPost(){
    return this.http.get('https://www.thesportsdb.com/xml/v2_livescore_example.json');
  }
}
