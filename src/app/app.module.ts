import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';  // Assurez-vous que le chemin est correct

import { FormsModule } from '@angular/forms';  // Importez FormsModule
import { AjouterProduitComponent } from './ajout-produit/ajout-produit.component.spec';

@NgModule({
  declarations: [
    AppComponent,
    AjouterProduitComponent  // Déclarez le composant AjouterProduitComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  // Ajoutez FormsModule ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
