import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { CommonModule } from '@angular/common';

interface LeagueRanking {
  strLeague: string;
  strSport: string;
  matchCount: number;
}

@Component({
  selector: 'app-about',
  imports:[CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  leagueRankings: LeagueRanking[] = [];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPost().subscribe((data: any) => {
        console.log('Datos recibidos:', data); // Verifica la estructura de los datos
        const leagueCount: { [key: string]: { strLeague: string; strSport: string; matchCount: number } } = {};

        (data.livescore || []).forEach((event: any) => {
            if (!leagueCount[event.strLeague]) {
                leagueCount[event.strLeague] = {
                    strLeague: event.strLeague,
                    strSport: event.strSport,
                    matchCount: 0
                };
            }
            leagueCount[event.strLeague].matchCount++;
        });

        this.leagueRankings = Object.values(leagueCount).sort((a, b) => b.matchCount - a.matchCount);
        console.log('Ranking de ligas:', this.leagueRankings); // Muestra el ranking en la consola
    });
  }
}