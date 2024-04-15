import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './products.service';

@Controller('api/v1')
export class ProductsController {

    productService: ProductsService;

    constructor (productService: ProductsService) {
        this.productService = productService;
    }

    @Get('products')
    getProducts(): Product[] {
        return this.productService.getProducts();
    }

    @Get('products/:id')
    getProduct(@Param('id') id: string): Product {
        return this.productService.getProductById(id);
    }

    @Post('products')
    createProduct(@Body() product: Product): Product {
        return this.productService.createProduct(product);
    }

}
