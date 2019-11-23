import {ProductBasket} from "@ModuleA/ProductBasket";

export class CustomProductBasket extends ProductBasket{
    public ToString(): string {
        const products = this.getList();
        let result = `Custom Product Basket(${products.length} items)`;
        for(const product of products){
            result+=`Product #${product.id} ${product.title}: ${product.count} items\n`;
        }
        return result;
    }
}
