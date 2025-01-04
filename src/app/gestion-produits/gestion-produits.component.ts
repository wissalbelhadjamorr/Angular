import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';  // Import du service pour récupérer les produits
import { Produit } from '../shared/produit.modal';  // Modèle Produit

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.css']
})
export class GestionProduitsComponent implements OnInit {

  produits: Produit[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: Produit[]) => {
      console.log('Produits récupérés:', data);  // Vérifiez que les données sont bien reçues
      this.produits = data;
    }, error => {
      console.error('Erreur lors de la récupération des produits:', error);
    });
  }
}
