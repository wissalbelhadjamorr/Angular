import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';  

import { FormsModule } from '@angular/forms';  // Importez FormsModule
import { AjouterProduitComponent } from './ajout-produit/ajout-produit.component.spec';

@NgModule({
  declarations: [
    AppComponent,
    AjouterProduitComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
