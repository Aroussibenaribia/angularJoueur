import { Equipe } from "./equipe.model";
import { Image } from './image.model';

export class Joueur {
  idJoueur!: number;
  title!: string;
  nomJoueur!: string;
  dateInscrit!: Date;
  prenomJoueur!: string;
  equipe!: Equipe;
  image! : Image
  imageStr!:string
}
