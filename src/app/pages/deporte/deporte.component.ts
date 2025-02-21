import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: ['./deporte.component.css']
})
export class DeporteComponent implements OnInit {

  // Propiedades para almacenar los equipos
  data: any[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPost().subscribe((response: any) => {
      // Asignamos la lista de equipos a la propiedad data
      this.data = response.teams;
      console.log(this.data);  // Verifica que los equipos se cargan correctamente
    });
  }
}
