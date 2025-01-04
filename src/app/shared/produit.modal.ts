export class Produit {
    id: number;              
    name: string;           
    description: string;    
    price: number;         
    currency: string;        
    stock: number;          
    category: string;        
    images: string[];        
  
    constructor(
      id: number,
      name: string,
      description: string,
      price: number,
      currency: string,
      stock: number,
      category: string,
      images: string[]
    ) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.currency = currency;
      this.stock = stock;
      this.category = category;
      this.images = images;
    }
  }