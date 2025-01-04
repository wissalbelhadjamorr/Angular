// src/app/ajout-produit/ajout-produit.component.ts
import { Component } from '@angular/core';
import { ApiService } from '../shared/api.service';  
import { Produit } from '../shared/produit.modal';

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',  // Assurez-vous que le nom du fichier HTML est correct
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent {  // Nom correct de la classe ici
  Produit: Produit = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    currency: '',
    stock: 0,
    category: '',
    images: []
  };

  constructor(private produitService: ApiService) { }

  ajouterProduit() {
    if (this.Produit.name && this.Produit.description && this.Produit.price) {
      this.produitService.addProduct(this.Produit);
      this.Produit = { id: 0, name: '', description: '', price: 0, currency: '', stock: 0, category: '', images: [] };
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  }
}
