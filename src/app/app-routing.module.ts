import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { SearchByEquipeComponent } from './search-by-equipe/search-by-equipe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeEquipesComponent } from './liste-equipes/liste-equipes.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { JoueurGuard } from './joueur.guard';

const routes: Routes = [
  { path: 'joueurs', component: JoueursComponent},
  { path: 'searchByEquipe', component: SearchByEquipeComponent},
  { path: 'rechercheParNom', component: RechercheParNomComponent},
  { path: 'listeEquipes', component: ListeEquipesComponent},
  { path: 'add-joueur', component: AddJoueurComponent, canActivate: [JoueurGuard]},
  { path: 'updateJoueur/:id', component: UpdateJoueurComponent, canActivate: [JoueurGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'app-forbidden', component: ForbiddenComponent},
  { path: '', redirectTo: 'joueurs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
