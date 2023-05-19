import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { Equipe } from '../model/equipe.model';
import { JoueurService } from '../services/joueur.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-search-by-equipe',
  templateUrl: './search-by-equipe.component.html',
  styleUrls: ['./search-by-equipe.component.css']
})
export class SearchByEquipeComponent implements OnInit {

  joueurs: Joueur[] = [];
  idEquipe!: number;
  equipes: Equipe[] = [];
  joueur!: Joueur;
  constructor(private joueurService : JoueurService, public authService : AuthService) { }

  ngOnInit(): void {
    this.joueurService.equipesList().subscribe (labs => {
      this.equipes = labs;
      console.log (this.equipes)
      this.joueurService.joueursList().subscribe (albs => {
        this.joueurs = albs;
      })
    })
  }

  onChange() {
    console.log (this.idEquipe);
    this.joueurService.rechrcheParEquipe(this.idEquipe).subscribe (albs => {
      console.log(albs);
      this.joueurs = albs;
      console.log(this.joueurs);
    })
  }

}
