// src/app/ajout-produit/ajout-produit.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';  // Importez ApiService
import { Produit } from '../shared/produit.modal';  // Importez le modèle Produit

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  produit: Produit = new Produit(0, '', '', 0, '', 0, '', []);  // Initialisez un produit vide
  produits: Produit[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(data => {
      this.produits = data;  // Récupérez tous les produits au démarrage
    });
  }

  ajouterProduit(): void {
    this.apiService.addProduct(this.produit).subscribe(() => {
      this.apiService.getProducts().subscribe(data => {
        this.produits = data;  // Rechargez les produits après l'ajout
      });
    });
  }
}