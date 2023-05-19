import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})
export class JoueursComponent implements OnInit {

  joueurs : Joueur[] = [];
  apiurl:string='http://localhost:8020/joueurs/api/image';

  constructor(private joueurService: JoueurService, public authService : AuthService) {}

  deleteJoueur(joueur: Joueur) {
    let conf = confirm("Are you sure you want to delete this joueur?");
    if (conf) {
      this.joueurService.deleteJoueur(joueur.idJoueur).subscribe( data => {
        console.log("Joueur deleted");
        this.loadJoueurs();
      });
    }
  }

  loadJoueurs() {
    this.joueurService.joueursList().subscribe({
      next: (joueurs) => {
        this.joueurs = joueurs;
      }
    })
  }


  ngOnInit(): void {
    this.loadJoueurs();
  }

}
