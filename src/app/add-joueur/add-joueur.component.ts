import { Component, OnInit } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { Router } from '@angular/router';
import { Equipe } from '../model/equipe.model';
import { Image } from '../model/image.model';

@Component({
  selector: 'app-add-joueur',
  templateUrl: './add-joueur.component.html',
  styleUrls: ['./add-joueur.component.css']
})
export class AddJoueurComponent implements OnInit {

  newJoueur = new Joueur();

  equipes!: Equipe[];
  newEquipeId!: number;
  newEquipe!: Equipe;
  uploadedImage!: File;
  imagePath: any;


  constructor(private joueurService: JoueurService, private router : Router) {}

  ngOnInit(): void {
    /* this.equipes = this.joueurService.equipesList(); */
    this.joueurService.equipesList().subscribe (data => {
      this.equipes = data;
      console.log(data);
      console.log(this.newEquipeId);
    })
  }

  addJoueur(){
    this.joueurService
    .uploadImage(this.uploadedImage, this.uploadedImage.name)
    .subscribe((img: Image) => {
    this.newJoueur.image=img;
    this.newJoueur.equipe = this.equipes.find(cat => cat.idEquipe
    == this.newEquipeId)!;
    this.joueurService
    .addJoueur(this.newJoueur)
    .subscribe(() => {
      console.log(this.newJoueur)
    this.router.navigate(['joueurs']);
    });
    });}

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(this.uploadedImage);
    reader.onload = (_event) => { this.imagePath = reader.result; }
    }
}
