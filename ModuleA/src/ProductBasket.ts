﻿import {Product} from "@common/api/Product";
import {IUser} from "../../Contracts/src/api/IUser";

export class ProductBasket {
    protected products:  Product[];
    constructor(private owner: IUser){
        this.products = new Array();
    }
    public Add(product: Product): void{
        let existingProduct = this.products.find(p=>p.id == product.id);
        if (existingProduct) {
            existingProduct.count+=product.count;
        } else  {
            this.products.push(product);
        }
    }
    public Remove(id: number){
        const index= this.products.findIndex(p=> p.id == id);
        if (index>=0) {
            this.products.splice(index, 1);
        }
    }
    public getList(): Product[] {
        return this.products.slice();
    }
    public ToString():string {
        return `Product Basket(${this.products.length} items)`;
    }
}
