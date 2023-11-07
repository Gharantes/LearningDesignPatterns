import { ShoppingOrderState } from "./shopping-order-state";
import { ShoppingOrder } from "./shopping-order";
import { OrderPending } from "./order-pending";
import { OrderRejected } from "./order-rejected";

export class OrderApproved implements ShoppingOrderState {
  private name = "Order Approved";
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment() {
    console.log("O pedido já está no estado pagamento aprovado.");
  }
  rejectPayment() {
    this.order.setState(new OrderRejected(this.order));
  }
  waitPayment() {
    this.order.setState(new OrderPending(this.order));
  }
  shipOrder() {
    console.log("Enviando pedido para o cliente...");
  }
}
