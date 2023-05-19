import { Component, OnInit } from '@angular/core';
import { Equipe } from '../model/equipe.model';
import { JoueurService } from '../services/joueur.service';

@Component({
  selector: 'app-liste-equipes',
  templateUrl: './liste-equipes.component.html',
  styleUrls: ['./liste-equipes.component.css']
})
export class ListeEquipesComponent implements OnInit {

  equipes!: Equipe[];

  updatedLab: Equipe = {"idEquipe":0, "equipeName":"", "equipeFounder":"", "equipeCountry":""};

  ajout: boolean = true;

  constructor(private joueurService : JoueurService) { }

  ngOnInit(): void {
    this.joueurService.equipesList().subscribe(data => {
      this.equipes = data;
    });
  }

  loadEquipes() {
    this.joueurService.equipesList().subscribe(data => {
      this.equipes = data;
    });
  }

  equipeUpdated(equipe: Equipe) {
    console.log("Lab Updated event received", equipe);
    this.joueurService.addEquipe(equipe).subscribe (() => {this.loadEquipes();});
  }

  updateLab(lab : Equipe) {
    this.updatedLab = lab;
    this.ajout = false;
  }

}
