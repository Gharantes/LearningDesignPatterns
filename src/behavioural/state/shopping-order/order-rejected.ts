import { ShoppingOrderState } from "./shopping-order-state";
import { ShoppingOrder } from "./shopping-order";
import { OrderPending } from "./order-pending";
import { OrderApproved } from "./order-approved";

export class OrderRejected implements ShoppingOrderState {
  private name = "Order Rejected";
  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment() {
    console.log("Não posso aprovar o pagamento porque o pedido foi recusado.");
  }
  rejectPayment() {
    console.log(
      "Não posso recusar o pagamento porque o pedido já está recusado."
    );
  }
  waitPayment() {
    console.log("Não posso mover para pendente porque o pedido foi recusado.");
  }
  shipOrder() {
    console.log("Não posso enviar o pedido com pagamento recusado.");
  }
}
