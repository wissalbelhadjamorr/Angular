import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service'; 
import { Produit } from '../shared/produit.modal';  

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
      console.log('Produits récupérés:', data); 
      this.produits = data;
    }, error => {

    });
  }
}
