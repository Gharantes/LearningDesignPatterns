import { TaxVisitorProtocol } from "./tax-visitor-protocol";
import { Food } from "./food";
import { Cigarette } from "./cigarette";
import { AlcoholicDrink } from "./alcoholic-drink";

export class UsTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.15;
  }
  calculateTaxesForCigarrete(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 2;
  }
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 1;
  }
}
