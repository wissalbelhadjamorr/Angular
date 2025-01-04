
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service'; 
import { Produit } from '../shared/produit.modal';  

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent implements OnInit {

  produit: Produit = new Produit(0, '', '', 0, '', 0, '', []); 
  produits: Produit[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getProducts().subscribe(data => {
      this.produits = data;  
    });
  }

  ajouterProduit(): void {
    this.apiService.addProduct(this.produit).subscribe(() => {
      this.apiService.getProducts().subscribe(data => {
        this.produits = data; 
      });
    });
  }
}
