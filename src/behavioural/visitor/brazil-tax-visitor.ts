import { TaxVisitorProtocol } from "./tax-visitor-protocol";
import { Food } from "./food";
import { Cigarette } from "./cigarette";
import { AlcoholicDrink } from "./alcoholic-drink";

export class BrazilTaxVisitor implements TaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.05;
  }
  calculateTaxesForCigarrete(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 1.5;
  }
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.5;
  }
}
