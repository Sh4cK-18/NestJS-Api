import { Injectable } from '@nestjs/common';

export interface Product { 
    id: string;
    name: string;
    author: string;
    year: number;
}

@Injectable()
export class ProductsService {
  
 products : Product[] = [
        {
            "id": "1",
            "name": "iPhone X",
            "author": "Apple",
            "year": 2017
          },
          {
            "id": "2",
            "name": "Samsung Galaxy S9",
            "author": "Samsung",
            "year": 2018
          },
          {
            "id": "3",
            "name": "Sony PlayStation 4",
            "author": "Sony",
            "year": 2013
          },
          {
            "id": "4",
            "name": "Amazon Echo",
            "author": "Amazon",
            "year": 2014
          },
          {
            "id": "5",
            "name": "Fitbit Charge 2",
            "author": "Fitbit",
            "year": 2016
          }
        ]

    getProducts() {
        return this.products;
    }

    getProductById(id: string) {
        return this.products.find(product => product.id === id);
    }

    createProduct(product: Product) { 
        console.log(product);
        this.products.push(product);
        return product;
    }
}
