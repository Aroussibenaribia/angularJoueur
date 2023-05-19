import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { JoueurService } from '../services/joueur.service';
import { Joueur } from '../model/joueur.model';
import { Router } from '@angular/router';
import { Equipe } from '../model/equipe.model';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styleUrls: ['./update-joueur.component.css']
})
export class UpdateJoueurComponent implements OnInit {

  currentJoueur = new Joueur();

  equipes!: Equipe[];
  updatedEquipeId?: number;

  constructor(private activatedRoute : ActivatedRoute, private joueurService : JoueurService, private router : Router) { }

  ngOnInit(): void {
    /* this.equipes = this.joueurService.equipesList(); */
    this.joueurService.equipesList().subscribe (labs => {
      this.equipes = labs;
      console.log(labs);
    })

    this.joueurService.getJoueurById(this.activatedRoute.snapshot.params['id']).subscribe( data => {
      this.currentJoueur = data;
      this.updatedEquipeId = this.currentJoueur.equipe.idEquipe;
      console.log(this.updatedEquipeId)
    });
  }

  updateJoueur() {
    /* this.currentJoueur.equipe = this.joueurService.getEquipeById(this.updatedEquipeId); */
    console.log(this.updatedEquipeId)
    this.currentJoueur.equipe.idEquipe=this.updatedEquipeId
    this.joueurService.updateJoueur(this.currentJoueur).subscribe( data => {
      this.router.navigate(['joueurs']);
    });
  }


}
