import { Shirt } from "./product/shirt";
import { ProductStamptDecorator } from "./product/product-stampt-decorator";
import { ProductCustomizationDecorator } from "./product/product-customization-decorator";

const shirt = new Shirt();
console.log(shirt.getPrice(), shirt.getName());
const shirtWithStamp = new ProductStamptDecorator(shirt);
console.log(shirtWithStamp.getPrice(), shirtWithStamp.getName());

const customizedShirt = new ProductCustomizationDecorator(shirt);
console.log(customizedShirt.getPrice(), customizedShirt.getName());
