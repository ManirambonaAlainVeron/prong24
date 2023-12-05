import { Component } from "@angular/core";
import { ItemComponent } from "./item/item.component";

@Component({
    selector:"app-product",
    standalone:true,
    templateUrl:"./product.component.html",
    styleUrl:"./product.component.css",
    imports:[ItemComponent]
})
export class ProductComponent{

    productName = "tomato"
}