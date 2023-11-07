import { Mediator } from "./mediator";
import { Seller } from "./seller";
import { Buyer } from "./buyer";

const mediator = new Mediator();

const seller1 = new Seller();
seller1.addProducts({ id: "1", name: "Camiseta", price: 49.9 });
seller1.addProducts({ id: "2", name: "Caneta", price: 9.9 });

const seller2 = new Seller();
seller2.addProducts({ id: "3", name: "Carro", price: 490009.9 });
seller2.addProducts({ id: "4", name: "Lápis", price: 1.9 });

mediator.addSeller(seller1, seller2);
// mediator.showProducts();

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy("2");
buyer.buy("3");
buyer.viewProducts();
