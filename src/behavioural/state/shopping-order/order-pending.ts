import { ShoppingOrderState } from "./shopping-order-state";
import { ShoppingOrder } from "./shopping-order";
import { OrderApproved } from "./order-approved";
import { OrderRejected } from "./order-rejected";

export class OrderPending implements ShoppingOrderState {
  private name = "Order Pending";
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment() {
    this.order.setState(new OrderApproved(this.order));
  }
  rejectPayment() {
    this.order.setState(new OrderRejected(this.order));
  }
  waitPayment() {
    console.log("O pedido já está no estado pagamento pendente.");
  }
  shipOrder() {
    console.log("Não posso enviar o pedido com pagamento pendente.");
  }
}
