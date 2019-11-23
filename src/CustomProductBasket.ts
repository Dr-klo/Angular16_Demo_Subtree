import {ProductBasket} from "@ModuleA/ProductBasket";

export class CustomProductBasket extends ProductBasket{
    public ToString(): string {
        let result = super.ToString();
        for(const product of this.products){
            result+= product.ToString();
        }
        return result;
    }
}
