import {ProductBasket} from "@ModuleA/ProductBasket";

export class CustomProductBasket extends ProductBasket{
    public ToString(): string {
        let result = `Custom Product Basket(${this.products.length} items)`;
        for(const product of this.products){
            result+=`Product #${product.id} ${product.title}: ${product.count} items\n`;
        }
        return result;
    }
}
