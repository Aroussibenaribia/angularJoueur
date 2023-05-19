import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeEquipesComponent } from './liste-equipes/liste-equipes.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { SearchByEquipeComponent } from './search-by-equipe/search-by-equipe.component';
import { UpdateEquipeComponent } from './update-equipe/update-equipe.component';
import { TokenInterceptor } from './services/token.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    JoueursComponent,
    AddJoueurComponent,
    UpdateJoueurComponent,
    RechercheParNomComponent,
    ListeEquipesComponent,
    LoginComponent,
    ForbiddenComponent,
    SearchByEquipeComponent,
    UpdateEquipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
